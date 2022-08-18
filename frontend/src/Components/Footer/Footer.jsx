import "./Footer.css";
import {
  facebook,
  twitter,
  instagram,
  home,
  call,
  emailIcon,
} from "../../icons";
const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="left">
        <h1 className="logo">Monja Collection</h1>
        <p className="desc">
          Market Place ini dibuat untuk anda yang tidak punya uang namun ingin
          membeli pakaian dengan kualitas bagus. Karena barang itu kami sendiri
          yang menjaminnya bahwa barang sesuai dengan foto.
        </p>
        <div className="socialContainer">
          <div className="socialIcon">
            <img src={facebook} alt="search" width={25} height={25} />
          </div>
          <div className="socialIcon">
            <img src={twitter} alt="search" width={25} height={25} />
          </div>
          <div className="socialIcon">
            <img src={instagram} alt="search" width={25} height={25} />
          </div>
        </div>
      </div>
      <div className="center">
        <h3 className="title">Layanan Monja Admin</h3>
        <ul className="list">
          <li className="listItem">Home</li>
          <li className="listItem">Cart</li>
          <li className="listItem">Man Fashion</li>
          <li className="listItem">Woman Fashion</li>
          <li className="listItem">Accessories</li>
          <li className="listItem">My Account</li>
          <li className="listItem">Order Tracking</li>
          <li className="listItem">Wishlist</li>
          <li className="listItem">Terms</li>
        </ul>
      </div>
      <div className="right">
        <h3 className="title">Contact</h3>
        <div className="contactItem">
          <img
            src={home}
            alt="search"
            style={{ marginRight: "10px" }}
            width={25}
            height={25}
          />
          jln.Kp Ciburial No 59, kec.Padalarang, kab.Bandung Barat, Kota Bandung
        </div>
        <div className="contactItem">
          <img
            src={call}
            alt="search"
            style={{ marginRight: "10px" }}
            width={25}
            height={25}
          />
          +62 818 09246939
        </div>
        <div className="contactItem">
          <img
            src={emailIcon}
            alt="search"
            style={{ marginRight: "10px" }}
            width={25}
            height={25}
          />
          jeanbutar24@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
