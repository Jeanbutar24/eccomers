import {
  accountCircle,
  localShipping,
  settingSystemDay,
  addCard,
  dasboardIcon,
  insertchart,
  logout,
  notifications,
  settings,
  storefront,
} from "../../adminIcon/index";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Monja Collection</span>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <img src={dasboardIcon} alt="search" width={25} height={25} />
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
          <li>
            <img src={storefront} alt="search" width={25} height={25} />
            <span>Product</span>
          </li>
          <li>
            <img src={addCard} alt="search" width={25} height={25} />
            <span>Orders</span>
          </li>
          <li>
            <img src={localShipping} alt="search" width={25} height={25} />
            <span>Delevery</span>
          </li>
          <p className="title">Usefull</p>
          <li>
            <img src={insertchart} alt="search" width={25} height={25} />{" "}
            <span>Stats</span>
          </li>
          <li>
            <img src={notifications} alt="search" width={25} height={25} />
            <span>Notification</span>
          </li>
          <p className="title">Service</p>
          <li>
            <img src={settingSystemDay} alt="search" width={25} height={25} />
            <span>Systems Health</span>
          </li>

          <li>
            <img src={settings} alt="search" width={25} height={25} />{" "}
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <img src={accountCircle} alt="search" width={25} height={25} />{" "}
            <span>Profile</span>
          </li>
          <li>
            <img src={logout} alt="search" width={25} height={25} />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorPicker"></div>
        <div className="colorPicker"></div>
      </div>
    </div>
  );
};

export default Sidebar;
