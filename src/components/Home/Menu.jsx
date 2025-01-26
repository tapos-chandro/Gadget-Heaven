import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

const Menu = ({ menu }) => {
  const categoryMenu = ({ isActive }) => ({
    color: isActive ? "#FFF" : "",
    background: isActive ? "#9538E2" : "transparent",
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
    product: PropTypes.string,
  }),
};

export default Menu;
