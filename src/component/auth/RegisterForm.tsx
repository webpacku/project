// import {Link, useNavigate, createLazyFileRoute} from "@tanstack/react-router";

import {useState} from "react";
import FormInput from "./FormInput";

const RegisterForm = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        hasPassword: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInputs(prep => ({...prep, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen overflow-scroll fixed inset-0 bg-white">
            <section className="py-6">
                <h1 className="font-semibold text-center text-2xl uppercase">
                    {" "}
                    buat akun baru
                </h1>

                <form onSubmit={handleSubmit} className="p-6 mt-6">
                    <div>
                        <FormInput
                            label="nama akun"
                            onChange={handleChange}
                            values={inputs.name}
                            type="text"
                            name="name"
                            placeholder="nama lengkap atau nama panggung"
                        />
                        {!inputs.name.length ? (
                            <p className="text-sm text-red-600">
                                harap isi nama
                            </p>
                        ) : null}
                    </div>

                    <FormInput
                        label="email"
                        onChange={handleChange}
                        values={inputs.email}
                        type="email"
                        name="email"
                        placeholder="email untuk verifikasi akun"
                    />

                    <div>
                        <FormInput
                            label="email"
                            onChange={handleChange}
                            values={inputs.hasPassword}
                            type="password"
                            name="hasPassword"
                            placeholder="mengulangi kata sandi dengan benar"
                        />
                        <p className="text-sm text-red-600">
                            {inputs.hasPassword === inputs.password
                                ? null
                                : "Kata sandi tidak sama"}
                        </p>
                    </div>

                    <div className="mt-4">
                        <button className="w-full p-3 bg-green-500 text-white font-medium rounded-lg">
                            Buat akun
                        </button>
                    </div>

                    <p className="mt-6">
                        sudah memiliki sebuah aku ?
                        <span className="text-blue-500"> masuk </span>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default RegisterForm;
