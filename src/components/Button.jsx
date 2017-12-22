import React from "react";

export default ({ children, className, onClick }) => {
  return (
    <button onClick={() => onClick(children)} className={`${className} Button`}>
      {children}
    </button>
  );
};
