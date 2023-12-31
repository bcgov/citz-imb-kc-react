import React from "react";
import "./RefreshExpiryDialog.css";
import { LoginProps } from "../types";
import { useKeycloak } from "../state/useKeycloak";

type RefreshExpiryDialogProps = {
  isVisible: boolean;
  loginProps?: LoginProps;
};

export const RefreshExpiryDialog = (props: RefreshExpiryDialogProps) => {
  const { isVisible, loginProps } = props;
  const { login } = useKeycloak();

  if (!isVisible) return null;

  return (
    <>
      <div className="kcr_dialog-overlay" />
      <dialog className="kcr_dialog" open={isVisible}>
        <div className="kcr_dialog-content">
          <p className="kcr_dialog-message">Your login session has expired.</p>
          <button className="kcr_button" onClick={() => login(loginProps)}>
            RE-LOGIN
          </button>
        </div>
      </dialog>
    </>
  );
};
