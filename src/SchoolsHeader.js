import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';



function SchoolURL(props){
    let new_title = "School of " + props.name;

    return(
        <button className="link" key={props.name} onClick={() => {props.updatePage("schoolView"); props.updateSchool(props.school_id); props.updateHeaderTitle(new_title);}}><div className="school-item">{props.name}</div></button>
    );
}

function SchoolsHeader(props){
    const [schools, setSchools] = useState(null)

    useEffect(() => {
        axios.get(props.apiroot + "/schools/").then((schoollist) => {
            setSchools(schoollist.data)
        });
    }, [props.apiroot]);

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
                    {schools.map((item) => <SchoolURL  updatePage={props.updatePage} updateSchool={props.updateSchool} updateHeaderTitle={props.updateHeaderTitle}
                                                       key={item.school_id} school_id={item.school_id}
                                                       name={item.name} apiroot={props.apiroot}
                                                       />)}
                    {getSpacersFor(schools.length+1)}
                </div>
            {/*end schools-grid*/}
            </span> /*TODO: Add code to count schools (+1 for top) and then do spacers = count%5, and create that many blank spacers. */
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