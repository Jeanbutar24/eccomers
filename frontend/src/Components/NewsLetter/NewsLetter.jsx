import "./Newsletter.css";
import { send } from "../../icons/index";
const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1 className="title">Feedback</h1>
      <div className="desc">
        Get timely updates from your favorite products.
      </div>
      <div className="inputContainer">
        <input type="text" placeholder="Response" />
        <button>
          <img src={send} alt="search" width={25} height={25} />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
