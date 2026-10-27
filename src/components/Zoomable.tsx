"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowsOutSimple, X } from "@phosphor-icons/react";

// Captura que se abre a pantalla completa al tocarla. Usa <dialog> nativo:
// Esc, foco y lectores de pantalla vienen resueltos por el navegador.
export function Zoomable({
  src,
  full,
  alt,
  zoomLabel,
  closeLabel,
  priority,
  compact,
}: {
  src: string;
  full: string;
  alt: string;
  zoomLabel: string;
  closeLabel: string;
  priority: boolean;
  compact: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  // Mientras el visor está abierto, la página de atrás no scrollea. Se libera al
  // cerrar por cualquier vía: botón, fondo, o Esc (que llega por onClose).
  const release = () => document.documentElement.style.removeProperty("overflow");
  const close = () => {
    dialog.current?.close();
    release();
  };
  const open = () => {
    document.documentElement.style.overflow = "hidden";
    dialog.current?.showModal();
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={`${zoomLabel}: ${alt}`}
        className="group absolute inset-0 cursor-zoom-in overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          priority={priority}
        />
        {/* Mismo lenguaje que el botón principal: acento sólido. El texto solo entra
            donde hay lugar; en el celular queda el ícono. En las capturas grandes va
            arriba, porque abajo la tapa la captura chica superpuesta. */}
        <span
          aria-hidden
          className={`absolute right-3 ${compact ? "bottom-3" : "top-3"} inline-flex h-9 items-center gap-2 rounded-xl bg-accent px-2.5 text-xs font-medium text-accent-ink shadow-[0_10px_24px_-10px_var(--accent)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-active:scale-[0.97] sm:px-3`}
        >
          <ArrowsOutSimple size={16} weight="bold" />
          {!compact && <span className="hidden sm:inline">{zoomLabel}</span>}
        </span>
      </button>

      <dialog
        ref={dialog}
        // Un click en el fondo llega al <dialog> mismo; en la imagen o el botón, no.
        onClick={(e) => e.target === e.currentTarget && close()}
        onClose={release}
        className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 backdrop:bg-[#060b14]/85 backdrop:backdrop-blur-sm"
      >
        {/* En el celular la captura se abre grande y se recorre con el dedo; en pantallas
            más anchas entra completa. */}
        <div className="relative max-h-[85dvh] max-w-[94vw] overflow-auto rounded-xl sm:max-h-none sm:max-w-none sm:overflow-visible">
          <Image
            src={full}
            alt={alt}
            width={2880}
            height={1800}
            sizes="94vw"
            className="block h-auto w-[1100px] max-w-none rounded-xl sm:max-h-[90dvh] sm:w-auto sm:max-w-[94vw]"
          />
          <button
            type="button"
            onClick={close}
            aria-label={closeLabel}
            className="fixed top-3 right-3 grid sm:absolute sm:-top-4 sm:-right-4 h-10 w-10 place-items-center rounded-xl bg-accent text-accent-ink shadow-[0_10px_24px_-10px_var(--accent)] transition-transform hover:scale-105 active:scale-95"
          >
            <X size={18} weight="bold" />
          </button>
        </div>
      </dialog>
    </>
  );
}
