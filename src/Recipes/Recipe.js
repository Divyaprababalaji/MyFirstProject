import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./Recipe.css";
import { useEffect, useState } from "react";
import Recipedata from "./Recipedata.json";

function Recipe() {
  const [selectedrecipename, setSelectedrecipename] = useState("Classic Margherita Pizza");
  const defaultrecipe=Recipedata?.recipes?.filter((e)=>{
    return e.name==="Classic Margherita Pizza"
  })
  const [filteredrecipe,setFilteredrecipe] = useState(defaultrecipe);
  useEffect(() => {}, [selectedrecipename,filteredrecipe]);
  console.log(Recipedata);

  const LocalRecipedata=Recipedata?.recipes;
  const handleRecipeChange = (e) => {
    setSelectedrecipename(e.target.value);
    setFilteredrecipe(LocalRecipedata?.filter((ele)=>{

      return ele.name===e.target.value
    }))
  };
  // const handleRecipeNameChange = (e) => {
  //   setRecipename(e.target.value);
  // };
  return (
    <>
      <div className="drpdwntext">
        <InputLabel>Select your Recipe: </InputLabel>
        <Select
          value={selectedrecipename}
          label="Select your Recipe"
          sx={{ width: 350 }}
          onChange={handleRecipeChange}
        >
                   {Recipedata.recipes.length > 0 &&
            Recipedata.recipes.map((e, index) => {
              return (
                <MenuItem key={index} value={e.name}>
                  {e.name}
                </MenuItem>
              );
            })}


        </Select>
      </div>

      <div className="Recipecardcontainer">
        <div className="imagesec">
          <img
            style={{ height: 200, width: 200 }}
            src={filteredrecipe[0]?.image}
            alt="pizza pic"
          />
        </div>
        <div className="textsec">

       <h1>
        {filteredrecipe[0]?.name}
       </h1>

        </div>
        <div className="instrsec">
          <h2>Instruction:</h2>
          <p>
            {filteredrecipe[0]?.instructions}
          </p>
        </div>
      </div>
    </>
  );


}
export default Recipe;
