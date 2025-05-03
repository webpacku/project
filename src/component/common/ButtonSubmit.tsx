import {useFormStatus} from "react-dom";

interface ButtonSubmitProps {
    type: "button" | "submit" | "reset";
    loading: string;
    title: string;
}

const cl =
    "bg-green-500 text-white w-full p-3 border border-gray-300 rounded-lg flex items-center justify-center";
const ButtonSubmit = ({type, loading, title}: ButtonSubmitProps) => {
    const {pending} = useFormStatus();
    return (
        <button type={type} className={cl} disabled={pending}>
            {pending ? loading : title}
        </button>
    );
};

export default ButtonSubmit;
