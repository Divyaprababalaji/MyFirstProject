import { useState } from "react";
import "../QRcode/QRcode.css";
import QRimage from "../images/QR_code_img.png";

function QRcode() {
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(false);
  const [showImgtag, setShowImgtag] = useState(false);
  const [qrdata, setQrdata] = useState("");
  const [qrsize, setQrsize] = useState("");

 
  
  async function handlegeneratebtn() {
    setLoading(true);
    setTimeout(()=>{
      setShowImgtag(true);
      setLoading(false);
    },3000) 
   
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${encodeURIComponent(
        qrdata
      )}`;
      setImg(url);
    } catch (error) {
      console.error("Error Generating QR code", error);
    } finally {
      // setLoading(false);
    }
    
  }
  const handledownloadbtn =(()=>{
    fetch (img)
    .then((response)=>response.blob())
    .then((blob)=>{
      const link=document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download ="qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
  })

  return (
    <div className="Appcontainer">
      <h1
        style={{ color: "deepskyblue", fontSize: "24px", fontWeight: "400px" }}
      >
        QR Code Generator
      </h1>
      {loading && <p>Please wait...</p>}
      {showImgtag && (
        <img
          style={{ height: {qrsize}, width: "100px" }}

          src={img}
          alt={"code"}
        />
      )}
      <div style={{ marginBottom: "8px" }}>
        <label htmlFor="inputdata" style={{ color: "deepskyblue" }}>
          Data for QR Code:
        </label>
        <input
          type="text"
          value={qrdata}
          id="inputdata"
          placeholder="Enter Data for QR Code"
          onChange={(e) => {
            setQrdata(e.target.value);
          }}
        ></input>
      </div>
      <div style={{ marginBottom: "8px" }}>
        <label htmlFor="imagedata" style={{ color: "deepskyblue" }}>
          Image Size (e.g.,300):{" "}
        </label>
        <input
          id="imagedata"
          value={qrsize}
          placeholder="Enter Image Size"
          onChange={(e) => {
            setQrsize(e.target.value);
          }}
        ></input>
      </div>
      <div style={{ display: "flex", margin: "10px"}}>
        <button className="Generatebutton" disabled={loading} onClick={handlegeneratebtn}>
          Generate QR Code
        </button>
        <button className="Downloadbutton" onClick={handledownloadbtn}>Download QR Code</button>
      </div>
    </div>
  );
}
export default QRcode;
