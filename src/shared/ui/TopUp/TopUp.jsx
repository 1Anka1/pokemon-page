import { useEffect } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';

export const TopUp = ({ children }) => {
  useEffect(() => {
    toast(children);
  }, [children]);

  return (
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
  );
};
