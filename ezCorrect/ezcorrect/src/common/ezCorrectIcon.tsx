import * as React from 'react';
import img from '../resources/ezCorrectIcon.png';

export interface IIconProps {
  width: number;
  height: number;
}

const EzCorrectIcon: React.FC<IIconProps> = (props) => {
  return <img src={img} width={props.width} height={props.height} alt="company logo" />;
};

export default EzCorrectIcon;
