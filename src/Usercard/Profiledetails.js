function Profiledetails({ProfiledetailsecProfiledata}) {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <h3 className="username">{ProfiledetailsecProfiledata?.Username}</h3>
      <h3 className="city">{ProfiledetailsecProfiledata?.City}</h3>
      <p>{ProfiledetailsecProfiledata?.Role}</p>
    </div>
  );
}
export default Profiledetails;
