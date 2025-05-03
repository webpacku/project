import {lazy, Suspense} from "react";
const ToBold = lazy(() => import("@/service/ConvertToBold"));

const Item = () => {
    const text: string = `*Upgrade Akun Premium! 🚀*
    
Mulai dari Rp 5.000, kamu bisa upgrade akunmu ke premium dan nikmati fitur-fitur eksklusif! 😍

*Pembelian Lainnya 💸*

Mulai dari Rp 2.000, kamu bisa melakukan pembelian lainnya dan menikmati berbagai keuntungan! 🎁

Yuk, upgrade akunmu sekarang juga!`;
    return (
        <div className="bg-white px-6 py-4 mt-2">
            <p className="whitespace-pre-wrap">
                <Suspense fallback={<></>}>
                    <ToBold text={text} />
                </Suspense>
            </p>
            <button className="bg-green-500 text-white w-full mt-2 p-2.5 rounded-full">
                ayo cek sekarang di sini
            </button>
        </div>
    );
};

export default Item;
