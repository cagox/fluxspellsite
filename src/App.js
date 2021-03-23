import React from 'react';
import PageTitle from './PageTitle.js';
import SchoolsHeader from './SchoolsHeader.js';
import SpellIndex from './SpellIndex.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "indexPage",
            header_title: "FluxRPG Spell List"
        };
    }

    render() {
        let pageBody = <SpellIndex />;
        /*
         * Eventually this will select an appropirate body element
         * based on this.props.page.
         */

        return(
            <div className="container contentblock">
                <PageTitle text={this.state.header_title} />
                <SchoolsHeader />
                {pageBody}

            </div>
        );
    }

}

export default App;