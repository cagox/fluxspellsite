import React from 'react'
import SpellList from './SpellList.js'
import SchoolView from './SchoolView.js'

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

export default PageBody