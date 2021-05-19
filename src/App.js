import React from 'react';
import PageTitle from './PageTitle.js';
import SchoolsHeader from './SchoolsHeader.js';
import PageBody from './PageBody.js';
import PageFooter from './PageFooter.js';


function App(props) {
    return(
        <div>
            <PageTitle />
            <SchoolsHeader />
            <PageBody />
            <PageFooter />
        </div>
    );
}



export default App;
