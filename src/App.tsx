import React, { FC } from "react";
import "App.module.scss";
import Button from "./components/UI/Button/Button";
import classes from "./App.module.scss";
import ColorsSettings from "components/ColorsSettings/ColorsSettings";

const App: FC = () => {
  return (
    <div className={classes.App}>
      <div>
        <h1>Settings</h1>
        <div>
          <h2>Colors</h2>
          <hr />
          <ColorsSettings />
        </div>
      </div>
      <hr />
      <div>
        <h1>Components</h1>
        <div>
          <h2>Button</h2>
          <hr />
          <Button onClick={() => console.log("button click")}>Button</Button>
          <hr />
          <Button disabled={true}>Button Disabled</Button>
          <hr />
          <Button data-name="button">Button with data-attrs</Button>
          <hr />
          <Button type="submit">Button with Type: Submit</Button>
          <hr />
          <Button style={{ backgroundColor: "aqua", color: "black" }}>
            Button with CSSProperties: backgroundColor: "aqua", color: "black"
          </Button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default App;
