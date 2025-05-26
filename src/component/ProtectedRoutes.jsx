import { useEffect, useContext, useRef } from "react";
import ModalPoppup from "./modal/ModalPoppup";
import { CartContext } from "../context/CartContext";
import { LoginPage } from "../Routes/LoginPage";
import { RegisterPage } from "../Routes/RegisterPage";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const { setShowModal, showModal, isLoggined, showLogin } = useContext(CartContext);
  const hasRun = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggined && !hasRun.current) {
      setShowModal(true);
      hasRun.current = true;
      navigate('/dashboard')
    }
  }, [isLoggined, setShowModal]);

  return (
    <>
      {isLoggined ? children : showModal && (
        <ModalPoppup customClass="loginpopup">
          <div className="modalwrap">
            <div className="loginwrap" style={{ transform: showLogin ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
              <LoginPage />
              <RegisterPage />
            </div>
          </div>
        </ModalPoppup>
      )}
    </>
  );
}
