import React, { createContext, useState } from "react";

export const AppContext = createContext();


export const AppContextProvider = ({ children }) => {
	const [page, setPage]               = useState("indexPage");
	const [school, setSchool]           = useState("all");
	const [spell, setSpell]             = useState("none");
	const [type, setType]               = useState("all");
	const [headerTitle, setHeaderTitle] = useState("FluxRPG Spell List");
	/* const [apiroot, setApiroot]         = useState("http://localhost:8080/api"); */

	return (
		<AppContext.Provider
			value={{
				page,
				school,
				spell,
				type,
				headerTitle,
				setPage,
				setSchool,
				setSpell,
				setType,
				setHeaderTitle,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
