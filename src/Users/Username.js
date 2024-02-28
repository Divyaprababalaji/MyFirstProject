import "./Username.css";
import Userdata from "./Userdata.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

function Username() {
  const [selectedusername, setSelectedusername] = useState("Terry Medhurst");

  // const defaultusername = selectedusername((e) => {
  //   return e.firstName === "Terry Medhurst";
  // });

  const [filteredusername, setFilteredusername] = useState();

  useEffect(() => {}, [selectedusername, filteredusername]);

  const Localuserdata = Userdata?.users;

  const handleusernameChange = (e) => {
    setSelectedusername(e.target.value);
    const localfilteredusername = Localuserdata?.filter((ele) => {
      return ele.firstName + " " + ele.lastName === e.target.value;
    });

    setFilteredusername(localfilteredusername[0]);
  };

  // const Displayusername = Localuserdata.map((e) => {
  //   return (
  //     <MenuItem key={e.id} value={e.firstName}>
  //       {e.firstName + " " + e.lastName}
  //     </MenuItem>
  //   );
  // });

  // Localuserdata.firstName + " " + Localuserdata.lastName;
  // console.log(Userdata?.users);

  return (
    <>
      <div className="Usercontainer">
        <div className="Usernamecontainer">
          <InputLabel id="demo-simple-select-label">
            <b>Username:</b>
          </InputLabel>
          <Select
            sx={{ width: 350 }}
            labelId="demo-simple-select-label"
            // defaultValue={selectedusername}
            id="demo-simple-select"
            value={selectedusername}
            label="Username"
            onChange={handleusernameChange}
          >
            {Localuserdata.map((e, i) => {
              return (
                <MenuItem key={e.id} value={e.firstName + " " + e.lastName}>
                  {i + 1 + ". " + e.firstName + " " + e.lastName}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <div className="Usernamepic">
          <img
            style={{ height: 200 }}
            src={filteredusername?.image}
            alt="user pic"
          />
        </div>
        <div className="Agecontainer">
          <h2>Age: {filteredusername?.age}</h2>
        </div>
      </div>
    </>
  );
}

export default Username;
