import React from 'react';
import PageTitle from './PageTitle.js';
import SchoolsHeader from './SchoolsHeader.js';
import PageBody from './PageBody.js'
import PageFooter from './PageFooter.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "indexPage",
            school_id: 0,
            spell_id: 0,
            type_id: 0,
            page_index: 0,
            header_title: "FluxRPG Spell List",
            apiroot: "http://localhost:8080/api"
        };

        this.updateState = this.updateState.bind(this)

    }


    updateState(args)  {
        console.log('This was called ');
        console.log(args)
       this.setState(args)
    }


    render() {

        return(
            <div>
                <PageTitle text={this.state.header_title} />
                <SchoolsHeader apiroot={this.state.apiroot} viewschool={this.viewschool} updateState={this.updateState}/>
                <PageBody page={this.state.page} apiroot={this.state.apiroot} school_id={this.state.school_id} spell_id={this.state.spell_id} type_id={this.state.type_id} page_index={this.state.page_index} updateState={this.updateState}/>
                <PageFooter />
            </div>
        );
    }


}






export default App;