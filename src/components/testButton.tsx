import { FC } from "react";

interface ITestButtonProps{
  title:string;
}

const TestButton : FC<ITestButtonProps> = ({title}) => {
  return (
    <button>{title}</button>
  )
}

export default TestButton
