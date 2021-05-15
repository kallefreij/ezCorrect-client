import * as React from 'react';
import img from '../../resources/ezCorrectIcon.png';

export interface IIconStuff{
    width: number;
    height: number;
}

const EzCorrectIcon: React.FC<IIconStuff> = (props) => {
    return <img src={img} width={props.width} height={props.height}/> 
}

export default EzCorrectIcon;