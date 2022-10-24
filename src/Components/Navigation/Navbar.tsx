import { Link } from "react-router-dom";

const Navbar = () => {
  const adminName = "Milan Chalishajarwala";
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">{adminName}</div>
      <div className="navbarRight">
        <ul>
          <Link to="/"></Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
