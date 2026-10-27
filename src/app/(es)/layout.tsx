import "../globals.css";
import { Shell, metadataFor } from "@/components/Shell";

export const metadata = metadataFor("es");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="es">{children}</Shell>;
}
