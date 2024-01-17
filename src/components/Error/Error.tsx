import { useEffect, useState } from "react";

import "./Error.css";

type Props = {
  error: string;
};

function Error({ error }: Props) {
  const [loginError, setLoginError] = useState<string | null>(error);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setLoginError(error);
  }, [error]);

  if (!isVisible) {
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
    setLoginError(null);
  };

  return (
    <div className="error">
      {loginError && (
        <>
          <p>{loginError}</p>
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
        </>
      )}
    </div>
  );
}

export default Error;
