import {ChangeEvent} from "react";

type FormInputGroupProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: "text" | "password" | "email";
    value: string;
    name: string;
    hint: string;
};

const Input: React.FC<FormInputGroupProps> = ({
    onChange,
    type,
    value,
    name,
    hint
}) => {
    return (
        <input
            onChange={onChange}
            type={type}
            className="w-full p-3 outline-0 text-sm text-gray-500 border border-gray-300 rounded-lg"
            value={value}
            name={name}
            placeholder={hint}
        />
    );
};

export default Input;
