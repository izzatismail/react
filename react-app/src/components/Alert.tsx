import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode; //Using children, we can pass complex data, such as HTML, to our component using Props
    onDismiss: () => void;
}

const Alert = ({children, onDismiss} : Props) => {
  return (
    <div 
        className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>{children}</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onDismiss}></button>
    </div>
  )
}

export default Alert;