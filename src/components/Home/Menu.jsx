import { NavLink, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ContextProvider } from "../../Context/Context";

const Menu = ({ menu }) => {

  const { productCategory} = useContext(ContextProvider)

  const {pathname} = useLocation()

  const homeActiveColor =  pathname === '/' && productCategory === "All" && menu.id === 1 ;


  const categoryMenu = ({ isActive }) => ({
    color: isActive ? "#FFF" : `${homeActiveColor ? "#FFF" : ''}`,
    background: isActive ? '#9538E2' :  `${homeActiveColor ? '#9538E2' : 'transparent'}`  ,
    fontWeight: isActive ? "700" : "normal",
  });

  return (
    <>
      <NavLink
        style={categoryMenu}
        className="p-2 rounded-full w-full"
        to={`/product/${menu?.product?.split(" ")[0]}`}
      >
        {menu?.product}
      </NavLink>
    </>
  );
};

Menu.propTypes = {
  menu: PropTypes.shape({
    product: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
};

export default Menu;
