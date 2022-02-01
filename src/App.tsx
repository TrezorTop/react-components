import React, { FC } from "react";
import "App.module.scss";
import Button from "./components/UI/Button/Button";
import classes from "./App.module.scss";
import ColorsSettings from "components/ColorsSettings/ColorsSettings";
import Image from "./components/UI/Image/Image";
import Paragraph from "./components/Paragraph/Paragraph";

const App: FC = () => {
  return (
    <div className={classes.App}>
      <div>
        <h1>Settings</h1>
        <div>
          <h2>Colors</h2>
          <ColorsSettings />
        </div>
      </div>
      <div>
        <h1>Components</h1>
        <div>
          <h2>Button</h2>
          <Paragraph>
            <Button onClick={() => console.log("button click")}>Button</Button>
          </Paragraph>
          <Paragraph>
            <Button disabled={true}>Button Disabled</Button>
          </Paragraph>
          <Paragraph>
            <Button data-name="button">Button with data-attrs</Button>
          </Paragraph>
          <Paragraph>
            <Button type="submit">Button with Type: Submit</Button>
          </Paragraph>
          <Paragraph>
            <Button style={{ backgroundColor: "aqua", color: "black" }}>
              Button with CSSProperties: backgroundColor: "aqua", color: "black"
            </Button>
          </Paragraph>
        </div>
        <div>
          <h2>Image</h2>
          <Paragraph>
            <h3>
              <code>width={250}</code>
            </h3>
            <Image width={250} />
          </Paragraph>
          <Paragraph>
            <h3>
              <code>height={100}</code>
            </h3>
            <Image height={100} />
          </Paragraph>
          <Paragraph>
            <h3>
              <code>
                width={250} height={250}
              </code>
            </h3>
            <Image width={250} height={250} />
          </Paragraph>
          <Paragraph>
            <h3>Lazy Loading Image</h3>
            <Image width={500} src={"https://wallpaperaccess.com/full/4582851.jpg"} />
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default App;
