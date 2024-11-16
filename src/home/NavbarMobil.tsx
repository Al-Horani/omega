

import { ShoppingCartAdd } from "react-flaticons";
import { User } from "react-flaticons";
import { Bell } from "react-flaticons";
import { Home } from "react-flaticons";
import { MenuBurger } from "react-flaticons";
import { Link } from "react-router-dom";

import { useState } from "react";




const NavbarMobil = () => {
    const [activeIcon , setActiveIcon] = useState({
        "home":true,
        "user":false,
        "notify":false,
        "cart":false,
        "menu":false
      });
  return (
    <div className="min-w-screen">
      
        <header className=" mx-auto w-5/6 h-12 gap-x-8 flex items-center  justify-between ">
              <Link to={"/home"} className="cursor-pointer "  onClick={()=>{setActiveIcon({"home":true , "user":false , "notify":false ,"cart":false , "menu":false})}}>
                <Home className={`${activeIcon.home?'c':'text-slate-500'}`} size={22} />
              </Link>

              <Link to={"/user"} className="cursor-pointer" onClick={()=>{setActiveIcon({"home":false , "user":true , "notify":false ,"cart":false , "menu":false})}}>
                <User className={`${activeIcon.user?'c':'text-slate-500'}`} size={22}/> 
              </Link>

              <Link to={"/login"} className="cursor-pointer" onClick={()=>{setActiveIcon({"home":false , "user":true , "notify":false ,"cart":false , "menu":false})}}>
                  <Bell className={`${activeIcon.notify?'c':'text-slate-500'}`} size={22} onClick={()=>{setActiveIcon({"home":false , "user":false , "notify":true ,"cart":false ,  "menu":false})}}/>
              </Link>

              <ShoppingCartAdd className={`${activeIcon.cart?'c':'text-slate-500'}`} size={22} onClick={()=>{setActiveIcon({"home":false , "user":false , "notify":false ,"cart":true ,  "menu":false})}}/>
              <MenuBurger className={`${activeIcon.menu?'c':'text-slate-500'}`} size={22} onClick={()=>{setActiveIcon({"home":false , "user":false , "notify":false ,"cart":false , "menu":true})}}/>
      
        </header>
    </div>
  )
}

export default NavbarMobil