import { Navbar } from "./ui/Navbar";
import { Footer } from "./ui/Footer";
import { Outlet } from "@tanstack/react-router";
export function Layout() {
    return (
      <div className="site-shell min-h-screen text-foreground flex flex-col">
  
        <Navbar />
  
        <main className="flex-1">
          <Outlet />
        </main>
  
        <Footer />
      </div>
    );
  }
