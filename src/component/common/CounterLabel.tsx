import {NumberFormat} from "@/service/NumberFormat";

type Counterprops = {
    count: number;
    title: string;
};

const CounterLabel: React.FC<Counterprops> = ({count, title}) => {
    return (
        <>
            <span className="text-black font-medium">
                {NumberFormat(count)}
            </span>
            {title}
        </>
    );
};

export default CounterLabel;
