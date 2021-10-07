
import React from 'react';
import { Ellipse } from "./style";

const Badge = ({quantity}) => {
  return (
    <Ellipse>
      {quantity}
    </Ellipse>
  );
};

export default Badge;