import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from './AppContext.js';
import axios from 'axios';



function SchoolURL(props){
    const context = useContext(AppContext);
    let new_title = "School of " + props.name;
    const clickhandler = () => {context.setPage("schoolView"); context.setSchool(props.school_id); context.setHeaderTitle(new_title); console.log("Clicked on "+props.name);}

    return(
        <button className="link" key={props.school_id} onClick={clickhandler}><div className="school-item">{props.name}</div></button>
    );
}

function SchoolsHeader(props){
    const context = useContext(AppContext)
    const [schools, setSchools] = useState(null)


    useEffect(() => {
        axios.get(context.apiroot + "/schools/").then((schoollist) => {
            setSchools(schoollist.data)
        });
    }, [context.apiroot]);

    if (schools === null) {
        return (
            <span>
                <div className="header-grid">
                    <div className="header">Schools</div>
                </div>
                <div className="schools-grid">
                    <div className="school-item"><a href="/">Top</a>&nbsp;</div>
                    {getSpacersFor(1)}
                </div>
            </span>
        );
    }


    return (
        <span>
                <div className="header-grid">
                    <div className="header">Schools</div>
                </div>
                <div className="schools-grid">
                        <div className="school-item"><a href="/">Top</a></div>
                    {schools.map((item) => <SchoolURL key={item.school_id} school_id={item.school_id} name={item.name} />)}
                    {getSpacersFor(schools.length+1)}
                </div>
            {/*end schools-grid*/}
            </span>
    );


    function getSpacersFor(count) {
        let spacersNeeded = 5-(count%5);
        if (spacersNeeded === 0) {
            return
        }
        var spacers = new Array(spacersNeeded)
        for(let i = 0; i < spacersNeeded; i++) {
            spacers[i] = <div className="school-item">&nbsp;</div>;
        }
        return spacers;
    }




}


export default SchoolsHeader;

