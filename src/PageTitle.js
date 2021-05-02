import React from 'react';
import {useEffect} from 'react';

function PageTitle(props) {

    useEffect(() => {document.title = props.text;}, [props.text]);

    return(
        <div className="header-grid">
            <div className="header">{props.text}</div>
        </div>
    );

}



export default PageTitle;
