import React, { FC } from "react";
import "App.module.scss";
import Button from "./components/Button/Button";
import classes from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={classes.App}>
      <h1>Button</h1>
      <hr />
      <Button onClick={() => console.log("button click")}>Button</Button>
      <hr />
      <Button onClick={() => console.log("button click")} disabled={true}>
        Button Disabled
      </Button>
      <hr />
      <Button onClick={() => console.log("button click")} active={true}>
        Button Active
      </Button>
      <hr />
      <Button
        data-name="button"
        onClick={() => console.log("button click")}
        active={true}
      >
        Button with Data
      </Button>
      <hr />
      <Button type="submit" onClick={() => console.log("button click")}>
        Button with Type: Submit
      </Button>
      <hr />
    </div>
  );
};

export default App;
