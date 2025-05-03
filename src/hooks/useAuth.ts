// hooks/useAuth.ts
import {create} from "zustand";

type Session = {
    isLogin: boolean;
    user: any;
};

type AuthState = {
    session: Session;
    setSession: (session: Session) => void;
    logout: () => void;
};

export const useAuth = create<AuthState>(set => {
    // Load session from localStorage if exists
    const savedSession = localStorage.getItem("auth");
    const initialSession = savedSession
        ? JSON.parse(savedSession)
        : {isLogin: false, user: null};

    return {
        session: initialSession,
        setSession: session => {
            // Save session to localStorage
            localStorage.setItem("auth", JSON.stringify(session));
            set({session});
        },
        logout: () => {
            // Clear session from localStorage and reset state
            localStorage.removeItem("auth");
            set({session: {isLogin: false, user: null}});
        }
    };
});
