import {useEffect} from "react";

interface modalprops {
    isOpen: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<modalprops> = ({isOpen, onClick, children}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div
            onClick={onClick}
            className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-end"
        >
            {children}
        </div>
    );
};

export default Modal;
