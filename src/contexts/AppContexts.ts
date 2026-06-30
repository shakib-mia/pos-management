import React, { createContext } from "react";
import type { User } from "../interfaces/User";

export interface AppData {
	userData: User | null;
	setUserData: React.Dispatch<React.SetStateAction<User | null>>;
	token: string | null;
	setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AppContext = createContext<AppData>({
	userData: null,
	setUserData: () => {},
	token: null,
	setToken: () => {},
});
