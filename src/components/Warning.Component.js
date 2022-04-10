import React from "react";

export default function Warning() {
  return (
    <div className="warning">
      <i className="fa-solid fa-triangle-exclamation warning-icon"></i>
      <p className="warning-message">
        Your subscription has expired. Renew your subscription to be able to
        download and upload.
      </p>
      <i className="fa-solid fa-x close-icon"></i>
    </div>
  );
}
