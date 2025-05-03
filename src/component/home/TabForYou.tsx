import {useTabs} from "@/hooks/useTabs";
const ForyouLink = ["untukmu", "mengikuti", "komunitas"];

const TabForYou = () => {
    const {tabsForYou, setTabsForYou} = useTabs();

    return (
        <div className="mt-1 flex justify-around p-2 bg-white">
            {ForyouLink.map((item: any, i: number) => (
                <button
                    onClick={() => setTabsForYou(item)}
                    key={i}
                    className={`${
                        tabsForYou === item
                            ? "bg-blue-500 text-white"
                            : "text-gray-600"
                    } font-medium flex-1 px-2.5 py-1.5 rounded-full text-sm`}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default TabForYou;
