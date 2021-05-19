import React, {useContext, useEffect} from 'react';
import AppContext from './AppContext.js';

function PageTitle(props) {
    const context = useContext(AppContext);

    useEffect(() => {document.title = context.headerTitle;}, [context.headerTitle]);

    return(
        <div className="header-grid">
            <div className="header">{context.headerTitle}</div>
        </div>
    );

}



export default PageTitle;
