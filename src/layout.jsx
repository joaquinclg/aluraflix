import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";

function Layout() {
  return (
    <>
      <div className="min-h-dvh">
        <Header />
        <main className="h-full bg-background text-foreground">
          {/* <Cabecera/> */}
          {/* <FavoritoProvider> */}
          {/* <Container> */}
          <Outlet />
          {/* </Container> */}
          {/* </FavoritoProvider> */}
          {/* <Pie/> */}
        </main>
      </div>
    </>
  );
}

export default Layout;
