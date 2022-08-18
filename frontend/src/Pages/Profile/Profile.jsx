import "./Profile.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProfileComponent from "../../Components/Profile/ProfileComponent";
import Address from "../../Components/Address/Address";
const Profile = () => {
  return (
    <>
      <Header />
      <div className="containerProfile">
        <div className="left">
          <div className="sideBar">
            {/* <ul className="list">
              <h1 className="name">Ucok</h1>
              <li className="listItem">Profile</li>
              <li className="listItem">Wallet</li>
              <li className="listItem">My Order</li>
              <li className="listItem">Cart List</li>
            </ul>
            <div className="ends">
              <span className="endItem">Service</span>
              <span className="endItem">Logout</span>
            </div> */}
            <Sidebar />
          </div>
        </div>
        <div className="right">
          {/* <ProfileComponent /> */}
          <Address />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
