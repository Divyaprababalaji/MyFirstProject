import "./App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserImage from "./images/Lizard.PNG";

import { useEffect, useState } from "react";

function App() {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setuserData(json));
  }, [userData]);

  return (
    <div className="App">
      <div>
      <div className="imageSize">
        {userData.map((e, i) => {
          if (i <= 4) {
            return (
              <Card sx={{minWidth:300}}>
                <CardMedia
                  sx={{ height: 345}}
                  image={UserImage}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {e?.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "1.875rem" }}
                  >
                   {e?.company?.catchPhrase}
                  </Typography>
                </CardContent>

                {/* <h1>{e.name}</h1>
            <h1>{e.email}</h1> */}
              </Card>
            );
          }else{
            return null;          }
        })}
      </div>
      </div>
    </div>
  );
}

export default App;
