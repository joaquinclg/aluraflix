import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <div className="mx-auto min-h-dvh max-w-screen-3xl">
        <Header />
        <main className="min-h-dvh bg-background text-foreground">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
