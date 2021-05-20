import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import SpellList from './SpellList.js';
import AppContext from './AppContext.js';


function SchoolView(){
    
    const context = useContext(AppContext);
    const [description, setDescription] = useState("");

    useEffect( () => {
        axios.get(context.apiroot+"/schools/"+context.school).then((school) => {setDescription(school.data.description)});
    });

    return(
        <span>
                <div className="school-summary-grid">
                    <div className="summary-spacer-start">&nbsp;</div>
                    <div className="summary-box">{description}</div>
                    <div className="summary-spacer-end">&nbsp;</div>
                </div>
                <SpellList />
            </span>
    );
}


export default SchoolView;
