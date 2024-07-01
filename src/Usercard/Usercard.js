import "../Usercard/Usercard.css";
import Profiledetails from "../Usercard/Profiledetails";
import Userimage from "../Usercard/Userimage";
import Skills from "./Skills";
import Experience from "./Exp";
import Currentcompany from "./Currentcompany";
import Loginstatus from "./Loginstatus";

function Usercard({
  UsercardProfiledata,
  Usercardexpdata,
  Usercardcurrentcompany,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="cardcontainer">
        <Loginstatus Currentstatus={UsercardProfiledata}></Loginstatus>

        <br />
        <Userimage imgsecProfiledata={UsercardProfiledata}></Userimage>

        <Profiledetails
          ProfiledetailsecProfiledata={UsercardProfiledata}
        ></Profiledetails>
        <div className="button">
          <button className="msgbtn">Message</button>
          <button className="flwbtn">Following</button>
        </div>
        <div>
          <Skills Skillssec={UsercardProfiledata}></Skills>
        </div>
        <Experience Usercardexpdata={Usercardexpdata}></Experience>
        <Currentcompany
          Companydetails={Usercardcurrentcompany}
        ></Currentcompany>
      </div>
    </div>
  );
}
export default Usercard;
