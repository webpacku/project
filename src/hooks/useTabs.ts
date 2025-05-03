import {create} from "zustand";

type InProps = {
    tabsForYou: string;
    setTabsForYou: (e: string) => void;

    sidebar: boolean;
    setSidebar: (e: boolean) => void;

    thema: "light" | "dark";
    setThema: () => void;
};

export const useTabs = create<InProps>(set => ({
    tabsForYou: "untukmu",
    setTabsForYou: (e: string) => set({tabsForYou: e}),

    sidebar: false,
    setSidebar: (e: boolean) => set({sidebar: e}),

    thema: "light",
    setThema: () =>
        set(q => ({
            thema: q.thema === "light" ? "dark" : "light"
        }))
}));
