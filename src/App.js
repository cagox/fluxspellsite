import React from 'react';
import {useContext} from 'react';
import PageTitle from './PageTitle.js';
import SchoolsHeader from './SchoolsHeader.js';
import PageBody from './PageBody.js'
import PageFooter from './PageFooter.js'


const appState = {
    page: "indexPage",
    school_id: "all",
    spell_id: 0,
    type_id: 0,
    header_title: "FluxRPG Spell List",
    apiroot: "http://localhost:8080/api",
    setPage: (value) => {appState.page = value; console.log("Page set to "+value);},
    setSchool: (value) => {appState.school_id = value; console.log("School set to "+value);},
    setSpell: (value) => {appState.spell_id = value; console.log("Spell set to "+value);},
    setType: (value) => {appState.type_id = value; console.log("Type set to "+value);},
    setTitle: (value) => {appState.header_title = value; console.log("Title set to "+value);},
};


export const AppContext = React.createContext(appState);

function App(props) {
    const context= useContext(AppContext);
    return(
        /*<AppContext.Provider value={appState}>*/
        <div>
            <PageTitle text={context.header_title} />
            <SchoolsHeader />
            <PageBody />
            <PageFooter />
        </div>
        /*</AppContext.Provider>*/
    );
}



export default App;