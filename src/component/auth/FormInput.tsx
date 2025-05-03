type inputType = {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: string;
    type: string;
    name: string;
    placeholder: string;
};

const FormInput: React.FC<inputType> = ({
    label,
    onChange,
    values,
    type,
    name,
    placeholder
}) => {
    return (
        <div className="mt-4">
            <span className="font-medium"> {label} </span>
            <input
                onChange={onChange}
                value={values}
                type={type}
                name={name}
                className="w-full text-sm rounded-lg py-3 px-2 border-2 outline-0"
                placeholder={placeholder}
            />
        </div>
    );
};

export default FormInput;
