import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

import Colordata from './Colordata.json'

function ColorChangeDD() {
  const [divcolor, setDivcolor] = useState("pink");
  const [divheight, setDivheight] = useState(0);
  const [divwidth, setDivwidth] = useState(0);
  // useEffect()

  // const Colorlocaldata={
  //   "colors": [
  //     {
  //       "blue": "Blue"
  //     },
  //     {
  //       "red": "Red"
  //     },
  //     {
  //       "green": "Green"
  //     },
  //     {
  //       "yellow": "Yellow"
  //     }
  //   ]
  // }
  

  const handleColorChange = (e) => {
    setDivcolor(e.target.value);
  };
  const handleHeightChange = (e) => {
    setDivheight(e.target.value);
  };
  const handleWidthChange = (e) => {
    setDivwidth(e.target.value);
  };

  // console.log(Colordata.colors);
  

  return (
    <div>
      <InputLabel id="demo-simple-select-label">Color</InputLabel>
      {/* color */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={divcolor}
        label="color"
        sx={{ width: 350 }}
        onChange={handleColorChange}
      >
        {/* <MenuItem value={"blue"}>Blue</MenuItem> */}
         {Colordata.colors.length>0 && Colordata.colors.map((e,index)=>{
          return <MenuItem key={index} value={Object.entries(e)[0][0]}>{Object.entries(e)[0][1]}</MenuItem>
        })}
        
      </Select>

      {/* <height> */}
      <InputLabel id="demo-simple-select-label">Height</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={divheight}
        label="Height"
        sx={{ width: 350 }}
        onChange={handleHeightChange}
      >
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
        <MenuItem value={150}>150</MenuItem>
        <MenuItem value={200}>200</MenuItem>
      </Select>
      {/* width */}
      <InputLabel id="demo-simple-select-label">width</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={divwidth}
        label="color"
        sx={{ width: 350 }}
        onChange={handleWidthChange}
      >
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
        <MenuItem value={150}>150</MenuItem>
        <MenuItem value={200}>200</MenuItem>
      </Select>

      <div
        style={{
          height: divheight,
          width: divwidth,
          marginTop: 20,
          backgroundColor: divcolor,
        }}
      ></div>
    </div>
  );
}

export default ColorChangeDD;
