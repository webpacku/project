import {create} from "zustand";

type HookType = {
    createPost: boolean;
    setCreatePost: () => void;
    sidebar: boolean;
    setSidebar: () => void;
};
export const useHook = create<HookType>(set => ({
    createPost: false,
    setCreatePost: () =>
        set(state => ({
            createPost: state.createPost ? false : true
        })),

    sidebar: false,
    setSidebar: () =>
        set(state => ({
            sidebar: state.sidebar ? false : true
        }))
}));
