import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import SpellList from './SpellList.js';


function SchoolView(props){
    const [description, setDescription] = useState("");

    useEffect( () => {
        axios.get(props.apiroot+"/schools/"+props.school_id).then((school) => {setDescription(school.data.description)});
    });

    return(
        <span>
                <div className="school-summary-grid">
                    <div className="summary-spacer-start">&nbsp;</div>
                    <div className="summary-box">{description}</div>
                    <div className="summary-spacer-end">&nbsp;</div>
                </div>
                <SpellList apiroot={props.apiroot} school_id={props.school_id} updatePage={props.updatePage}
                           updateSchool={props.updateSchool} updateSpell={props.updateSpell}
                           updateHeaderTitle={props.updateHeaderTitle} updateType={props.updateType} />
            </span>
    );
}


export default SchoolView;
