import "../globals.css";
import { Shell, metadataFor } from "@/components/Shell";

export const metadata = metadataFor("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
