import "./whitepart.css";

function WhitePart() {
  return (
    <header>
      <div className="pPart">
        <p>Start your jounrey</p>
        <h3>Sign Up to InsideBox</h3>
      </div>
      <div className="InputPart">
        <input placeholder="example@email.com"></input>
        <br></br>
        <input type="password" placeholder=". . . . . . . . "></input>
      </div>
      <div className="ButtonDiv">
        <button>Sign Up</button>
      </div>
      <div className="Border">
        <div className="BorderPart"></div>
        <span>or sign up with</span>
        <div className="BorderPart"></div>
      </div>
      <div className="iconPart">
        <div className="Part1">
          <img src="https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"></img>
        </div>
        <div className="Part1">
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"></img>
        </div>
        <div className="Part1">
          <img src="https://cdn-icons-png.flaticon.com/512/154/154870.png"></img>
        </div>
      </div>
    </header>
  );
}
export default WhitePart;
