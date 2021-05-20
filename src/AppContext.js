import React, { createContext, useState } from "react";

export const AppContext = createContext();


export const AppContextProvider = ({ children }) => {
	const [page, setPage]               = useState("indexPage");
	const [school, setSchool]           = useState("all");
	const [spell, setSpell]             = useState(0);
	const [type, setType]               = useState(0);
	const [headerTitle, setHeaderTitle] = useState("FluxRPG Spell List");
	const [apiroot, setApiroot]         = useState("http://localhost:8080/api");

	return (
		<AppContext.Provider
			value={{
				page,
				school,
				spell,
				type,
				headerTitle,
				apiroot,
				setPage,
				setSchool,
				setSpell,
				setType,
				setHeaderTitle,
				setApiroot
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
