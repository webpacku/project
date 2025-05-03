const ToBold = ({text}: {text: string}) => {
    const regex = /\*(.*?)\*/g;

    return text.split(regex).map((data, index) => {
        if (index % 2 === 1) {
            return <span className="font-semibold text-black">{data}</span>;
        }
        return data;
    });
};
export default ToBold;
