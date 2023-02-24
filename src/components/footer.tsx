import { footerMenu } from "../constants/footer-menu";

function FooterComponent() {
  return (
    <div className="footer">
      <nav>
        <ul className="footer-container">
          {footerMenu.map(({ uri, Icon }, index) => (
            <li key={index} href={uri}>
              <a className="bottom-navigation-icon">
                <Icon size={24} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default FooterComponent;
