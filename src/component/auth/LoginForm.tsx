import {useNavigate} from "@tanstack/react-router";
import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useAuth} from "@/hooks/useAuth";
import {toast} from "sonner";
import {Login} from "@/api/auth";

import FormInput from "./FormInput";

const LoginForm = () => {
    const {setSession} = useAuth();
    const queryClient = useQueryClient(); // ✅ pakai hook
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username: "admin",
        password: "admin"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prep => ({...prep, [e.target.name]: e.target.value}));
    };

    const mutation = useMutation({
        mutationFn: () => Login(inputs),
        onSuccess: (user: any) => {
            queryClient.setQueryData(["user"], user);
            setSession({isLogin: true, ...user});
            toast.success("Horeee🔥🔥", {
                description: "Berhasil masuk, harap tunggu 🙏",
                position: "top-center"
            });
            setTimeout(() => {
                navigate({to: "/"});
            }, 3000);
        },
        onError: () => {
            return toast.info("aduuuh 😢", {
                description: "sepertinya username atau kata sandi salah",
                position: "top-center"
            });
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputs.username === "" || inputs.password === "")
            return toast.info("Kamu tidak mengisi form", {
                description: "harap isi semua formulir",
                position: "top-center"
            });
        mutation.mutate();
    };

    const GoBack = () => {
        navigate({
            to: "/auth"
        });
    };
    return (
        <div className="fixed inset-0 bg-white">
            <div className="border-b p-4">
                <button onClick={GoBack}>kembali</button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
                <FormInput
                    label="username"
                    onChange={handleChange}
                    values={inputs.username}
                    type="username"
                    name="username"
                    placeholder="username yang sudah terdaftar"
                />

                <FormInput
                    label="kata sandi"
                    onChange={handleChange}
                    values={inputs.password}
                    type="text"
                    name="password"
                    placeholder="kata sandi akun"
                />

                <div className="flex mt-4 justify-between">
                    <input type="checkbox" id="ingat" />
                    <span> Ingat saya</span>

                    <label className="">lupa kata sandi?</label>
                </div>

                <div className="mt-4">
                    <button className="w-full p-3 bg-green-500 text-white font-medium rounded-lg">
                        masuk
                    </button>
                </div>

                <p className="mt-6">
                    belum memiliki sebuah akun?
                    <span className="text-blue-500"> Buat Akun Baru </span>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
