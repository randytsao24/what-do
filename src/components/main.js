import * as React from "react";
import Button from "@mui/material/Button";

const Main = () => {
  console.log("wtf is going on!!");

  React.useEffect(() => {
    // TODO: Check user login
  }, []);

  return (
    <div>
      <Button variant="contained">Yoooo!</Button>
    </div>
  );
};

export default Main;
