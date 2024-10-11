// src/components/Notifications.tsx
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogoutModalProps extends BaseModalProps {
  onLogout: () => void;
}

interface NotificationsProps {
  modal: React.FC<LogoutModalProps>;
  modalProps: LogoutModalProps;
}

const Notifications: React.FC<NotificationsProps> = ({
  modal: ModalComponent,
  modalProps,
}) => {
  const showToast = (message: string, type: "success" | "error") => {
    if (type === "success") {
      toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    } else {
      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ModalComponent {...modalProps} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick={true}
        draggable={true}
        theme="colored"
        className="fixed top-0 left-0 right-0 z-50"
      />
    </>
  );
};

export default Notifications;

// Utility functions to trigger toasts
export const notifySuccess = (message: string) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    theme: "colored",
  });
};

export const notifyError = (message: string) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    theme: "colored",
  });
};
