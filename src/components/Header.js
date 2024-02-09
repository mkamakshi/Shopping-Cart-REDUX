import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/images/logo.png"

export const Header = () => {
  const cartList = useSelector(state=>state.cartState.cartList);
  const activeClass = "text-xl font-light block py-2 pr-4 pl-3 rounded md:bg-gray-100  md:p-3";
  const inActiveClass = "text-xl font-light block py-2 pr-4 pl-3 rounded";
  return (
    <header>
 <nav className="bg-white border-b border-gray-200 ">
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between p-4 ml-7 ">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Shopping Cart Logo" />
            <span className="self-center text-xl whitespace-nowrap ">REDUX Cart</span>  
          </Link>

          <ul className="flex flex-col p-4 md:p-0 mt-4   border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass }  end>Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart" className={({isActive}) => isActive ? activeClass : inActiveClass }  >Cart</NavLink>
              </li>
            </ul>

            <div className="flex md:order-2">
             <span className = "text-lg font-semibold">Cart: {cartList.length}</span>   
            </div>
         </div>
</nav>

    </header>
  )
}
