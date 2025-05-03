const ModalCenter = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="overflow-scroll fixed inset-0 z-50 bg-black bg-opacity-50">
            {children}
        </div>
    );
};

export default ModalCenter;
