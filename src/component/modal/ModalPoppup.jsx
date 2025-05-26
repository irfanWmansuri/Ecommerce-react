// import { useState } from "react";
import { useContext, useRef } from 'react';
import { CartContext } from '../../context/CartContext';

export default function ModalPoppup({ customClass, children }) {
    const {handleLoginPoppup} = useContext(CartContext);
    const modalButtonRef = useRef()
    // console.log(modalButtonRef);

  return (
    <div id="loginModal" className={`modal flex justify-center items-center fixed inset-0 z-10 bg-black bg-opacity-40 ${customClass}`}>
      <div className="modal-content m-auto w-3/5 relative">
        <button ref={modalButtonRef} onClick={handleLoginPoppup} className='modalbutton close-btn text-white float-right text-6 font-bold hover:text-black focus:text-black cursor-pointer bg-primary-600 w-8 h-8 rounded-full absolute right-[-8px] top-[-8px]' style={{zIndex : '999'}}>&times;</button>
        {children}
      </div>
    </div>
  )
}


