import React from 'react';
import PageTitle from './PageTitle.js';
import SchoolsHeader from './SchoolsHeader.js';
import SpellList from './SpellList.js'
import SchoolView from './SchoolView.js'


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
            <div className="container contentblock">
                <div clasName="header-grid">
                    <PageTitle text={this.state.header_title} />
                    <SchoolsHeader apiroot={this.state.apiroot} viewschool={this.viewschool} updateState={this.updateState}/>
                </div>
                {/* <PageBody updateState={this.updateState} page={this.state.page} school_id={this.state.school_id} spell_id={this.state.spell_id} type_id={this.state.type_id} page_index={this.props.page_index} apiroot={this.state.apiroot} /> */}
                <PageBody page={this.state.page} apiroot={this.state.apiroot} school_id={this.state.school_id} spell_id={this.state.spell_id} type_id={this.state.type_id} page_index={this.state.page_index} updateState={this.updateState}/>
                {/*Footer may go here, or in the index?*/}
            </div>
        );
    }


}

class PageBody extends React.Component {


    render() {
        if (this.props.page === "indexPage" ) {
            return(
                <SpellList apiroot={this.props.apiroot} school_id="all" updateState={this.props.updateState} />
                /*<IndexView pageIndex={this.props.page_index} />*/
            );
        }

        if (this.props.page === "schoolView") {
            return (<SchoolView school_id={this.props.school_id} pageIndex={this.props.page_index} apiroot={this.props.apiroot} updateState={this.props.updateState} />);
        }


        /*
            if page === "typeView"
            return <TypeView type_id={this.props.type_id} pageIndex={this.props.page_index} />
         */
        /*
            if page === "spellView"
            return <SpellView spell_id={this.props.spell_id} />
         */

        /* Default */
        return(
            <div>If you are seeing this, the page value was not set properly.</div>
        );

    }



}




export default App;