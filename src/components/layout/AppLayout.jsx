import { Toaster } from "@/components/ui/sonner";

import { Navbar } from "./Navbar";
import { SiteFooter } from "./SiteFooter";

/**
 * App frame shared by every page: Navbar on top, the current page in the
 * middle, footer at the bottom. Pages render through `children`.
 */
export function AppLayout({ children }) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
      <Toaster position="top-center" richColors />
    </>
  );
}
