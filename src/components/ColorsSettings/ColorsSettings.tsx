import React, { ChangeEvent, FC, useEffect } from "react";
import classes from "./ColorsSettings.module.scss";
import { setRootStylePropertyValue } from "../../util/rootStyleProperties";
import { RootColorVariables } from "../../types/styleVariables";
import useLocalStorage from "../../hooks/useLocalStorage";

type IState = {
  [key in RootColorVariables]?: string;
};

const ColorsSettings: FC = () => {
  const [colorsState, setColorsState] = useLocalStorage<IState>(
    "colorsSettings",
    {
      [RootColorVariables.ActiveColor]: "cyan",
      [RootColorVariables.PrimaryColor]: "red",
    }
  );

  useEffect(() => {
    setColorsState(colorsState);

    Object.keys(colorsState).forEach((color) => {
      setRootStylePropertyValue(
        color as RootColorVariables,
        colorsState[color as RootColorVariables]!
      );
    });
  }, []);

  const ColorInputHandler = (
    event: ChangeEvent<HTMLInputElement>,
    color: RootColorVariables
  ) => {
    setColorsState({
      ...colorsState,
      [color]: event.target.value,
    });

    setRootStylePropertyValue(color, event.target.value);
  };

  return (
    <div className={classes.Colors}>
      <div>
        Primary Color:&nbsp;
        <input
          type="text"
          value={colorsState?.["--primary-color"]}
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
          value={colorsState?.["--active-color"]}
          onChange={(event) =>
            ColorInputHandler(event, RootColorVariables.ActiveColor)
          }
        />
      </div>
    </div>
  );
};

export default ColorsSettings;
