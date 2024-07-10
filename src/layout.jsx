import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";

function Layout() {
  return (
    <>
      <div className="mx-auto min-h-dvh max-w-screen-3xl">
        <Header />
        <main className="h-full bg-background text-foreground">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
