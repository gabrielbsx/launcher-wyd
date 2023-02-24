import Logo from "../assets/images/logo.png";
import { sideMenu } from "../constants/side-menu";

function MenuComponent() {
  return (
    <header className="header">
      <nav>
        <ul className="navigation">
          <li className="navigation-link">
            <img src={Logo} alt="logo" />
          </li>
          {sideMenu.map(({ uri, Icon }, index) => (
            <li key={index} className="navigation-link">
              <a href={uri} className="navigation-link-icon">
                <Icon size={36} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MenuComponent;
