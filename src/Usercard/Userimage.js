function Userimage({imgsecProfiledata}) {
  return (
    <div>
      <img className="image_sec" src={imgsecProfiledata?.Url} alt="User_image" />
    </div>
  );
}
export default Userimage;
