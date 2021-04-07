import React from 'react';
import PageTitle from './PageTitle.js';
import SchoolsHeader from './SchoolsHeader.js';
import PageBody from './PageBody.js';

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

        this.viewSchool = this.viewSchool.bind(this)
        this.viewSpell = this.viewSpell.bind(this)
        this.viewType = this.viewType.bind(this)

        this.updateState = this.updateState.bind(this)

    }

    viewSchool(id) {
        this.setState(
            {
                page: "schoolView",
                school_id: id
            });
        console.log('Looking at Spell ID ', id.toString())
    }

    viewSpell(id) {
        this.setState(
            {
                page: "spellView",
                spell_id: id
            });
    }

    viewType(id) {
        this.setState(
            {
                page: "typeView",
                type_id: id
            });
    }

    updateState(args)  {
        console.log('This was called ');
        console.log(args)
       //this.setState(args)
    }


    render() {

        return(
            <div className="container contentblock">
                <PageTitle text={this.state.header_title} />
                <SchoolsHeader apiroot={this.state.apiroot} viewschool={this.viewschool} updateState={this.updateState}/>
                <PageBody updateState={this.updateState} page={this.state.page} school_id={this.state.school_id} spell_id={this.state.spell_id} type_id={this.state.type_id} page_index={this.props.page_index} apiroot={this.state.apiroot} />
                {/*Footer may go here, or in the index?*/}
            </div>
        );
    }

}

export default App;