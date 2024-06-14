import { ReactNode } from "react";

// pass text as a prop
interface AlertProps {
  // text: string;
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss=""
      ></button>
    </div>
  );
};

export default Alert;
