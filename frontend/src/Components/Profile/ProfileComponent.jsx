import "./Profile.css";

const ProfileComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="profile">
      <div className="top">
        <h1 className="title">My Profile</h1>
        <p className="desc">
          Manage your profile information to control, protect and save your
          account
        </p>
      </div>
      <div className="bottom">
        <div className="left">
          <form className="profileForm" onSubmit={handleSubmit}>
            <div className="profileInput">
              <label>username:</label>
              <input className="input" type="text" placeholder="username" />
            </div>
            <div className="profileInput">
              <label>phone Number:</label>
              <input type="text" className="input" placeholder="0878232387" />
            </div>
            <div className="profileInput">
              <label>email:</label>
              <input
                type="text"
                className="input"
                placeholder="admin@gmail.com"
              />
            </div>
            <div className="profileInput">
              <label>Gender:</label>
              <div className="gender">
                <div className="male">
                  <input type="checkbox" value="female" />
                  <label>male</label>
                </div>
                <div className="female">
                  <input type="checkbox" value="female" />
                  <label>female</label>
                </div>
              </div>
            </div>
            <div className="profileInput">
              <label htmlFor="">Addres:</label>
              <input type="text" className="input" placeholder="Addres" />
            </div>
            <div className="profileInput">
              <label htmlFor="">BirthDay:</label>
              <input className="input" type="date" name="" id="" />
            </div>
            <button className="buttonProfile">Submit</button>
          </form>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  );
};

export default ProfileComponent;
