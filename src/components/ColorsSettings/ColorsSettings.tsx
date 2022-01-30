import React, { ChangeEvent, FC, useEffect, useState } from "react";
import classes from "./ColorsSettings.module.scss";
import {
  getRootStylePropertyValue,
  setRootStylePropertyValue,
} from "../../util/rootStyleProperties";
import { RootColorVariables } from "../../types/styleVariables";

type IState = {
  [key in RootColorVariables]?: string;
};

const ColorsSettings: FC = () => {
  const [state, setState] = useState<IState>({
    [RootColorVariables.ActiveColor]: "",
    [RootColorVariables.PrimaryColor]: "",
  });

  useEffect(() => {
    setState({
      [RootColorVariables.PrimaryColor]: getRootStylePropertyValue(
        RootColorVariables.PrimaryColor
      ),
      [RootColorVariables.ActiveColor]: getRootStylePropertyValue(
        RootColorVariables.ActiveColor
      ),
    });
  }, []);

  const ColorInputHandler = (
    event: ChangeEvent<HTMLInputElement>,
    color: RootColorVariables
  ) => {
    setRootStylePropertyValue(color, event.target.value);

    setState({
      ...state,
      [color]: event.target.value,
    });
  };

  return (
    <div className={classes.Colors}>
      <div>
        Primary Color:&nbsp;
        <input
          type="text"
          value={state?.["--primary-color"]}
          onChange={(event) =>
            ColorInputHandler(event, RootColorVariables.PrimaryColor)
          }
        />
      </div>
      <hr />
      <div>
        Active Color:&nbsp;
        <input
          type="text"
          value={state?.["--active-color"]}
          onChange={(event) =>
            ColorInputHandler(event, RootColorVariables.ActiveColor)
          }
        />
      </div>
    </div>
  );
};

export default ColorsSettings;
