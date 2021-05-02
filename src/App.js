import React from 'react';
import {useState} from 'react';
import PageTitle from './PageTitle.js';
import SchoolsHeader from './SchoolsHeader.js';
import PageBody from './PageBody.js'
import PageFooter from './PageFooter.js'

function App(props) {
    const [page, setPage] = useState("indexPage");
    const [school_id, setSchool_id] = useState(0);
    const [spell_id, setSpell_id] = useState(0);
    const [type_id, setType_id] = useState(0);
    const [header_title, setHeader_title] = useState("FluxRPG Spell List");
    const apiroot = "http://localhost:8080/api";


    return(
        <div>
            <PageTitle text={header_title} />
            <SchoolsHeader apiroot={apiroot} updatePage={setPage} updateSchool={setSchool_id} updateHeaderTitle={setHeader_title}/>
            <PageBody
                page={page} school_id={school_id} spell_id={spell_id} type_id={type_id} apiroot={apiroot}
                updatePage={setPage} updateSchool={setSchool_id} updateSpell={setSpell_id} updateHeaderTitle={setHeader_title} updateType={setType_id}
            />
            <PageFooter />
        </div>
    );
}






export default App;