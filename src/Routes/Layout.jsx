import { useLocation, Outlet } from "react-router-dom";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";

export const Layout =()=> {
   const {pathname} = useLocation();
   const hideHeaderFooter = ['/dashboard','/orders', '/products', '/customers', '/reports'].some(path => pathname.startsWith(path))

   return(
    <>
      {!hideHeaderFooter && <Header/>}
      <Outlet/>
      {!hideHeaderFooter && <Footer/>}
    </>
   )
}