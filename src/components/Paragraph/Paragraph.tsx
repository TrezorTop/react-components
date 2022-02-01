import React, { FC } from "react";

const Paragraph: FC = ({ children }) => {
  return (
    <div>
      {children}
      <hr />
    </div>
  );
};

export default Paragraph;
