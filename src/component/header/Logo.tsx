const Logo = () => {
    return (
        <div className="text-xl italic font-semibold text-blue-500 text-center">
            {import.meta.env.VITE_APP_NAME}
        </div>
    );
};

export default Logo;
