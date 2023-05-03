import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'danger'; //Here we are explicitly mention we only accept these values
    onclick: () => void;
}


const Button = ({children, color ='primary', onclick}: Props) => { //Assignment on color=primary here means we are giving it a default value
  return (
    <button type="button" className={"btn btn-" + color} onClick={onclick}>{children}</button>
  )
}

export default Button