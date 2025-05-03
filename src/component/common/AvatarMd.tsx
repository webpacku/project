const AvatarMd = ({src}: {src: string | number}) => {
    return (
        <img
            src={`/src/images/${src == 0 ? "default.jpg" : src}`}
            className="shrink-0 bg-gray-500 w-12 h-12 object-cover rounded-full"
            alt="picture avatar"
            loading="lazy"
            width={40}
            height={40}
        />
    );
};

export default AvatarMd;
