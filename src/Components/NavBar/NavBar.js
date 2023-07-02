import "bootstrap/dist/css/bootstrap.min.css";
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ul className={style.menu}>
            <li>Plants</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
