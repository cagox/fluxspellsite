import React from 'react';
import SpellList from './SpellList.js';
import SchoolView from './SchoolView.js';



/*
    <PageBody
        page={page} school_id={school_id} spell_id={spell_id} type_id={type_id} apiroot={apiroot}
        updatePage={props.updatePage} updateSchool={props.updateSchool} updateSpell={props.updateSpell} updateHeaderTitle={props.updateHeaderTitle} updateType={props.updateType}
    />

*/

function PageBody(props){
    if (props.page === "indexPage" ) {
        return(
            <SpellList apiroot={props.apiroot} school_id="all" updatePage={props.updatePage}
                       updateSchool={props.updateSchool} updateSpell={props.updateSpell}
                       updateHeaderTitle={props.updateHeaderTitle} updateType={props.updateType} />
        );
    }

    if (props.page === "schoolView") {
        return (<SchoolView school_id={props.school_id} apiroot={props.apiroot} updatePage={props.updatePage}
                            updateSchool={props.updateSchool} updateSpell={props.updateSpell}
                            updateHeaderTitle={props.updateHeaderTitle} updateType={props.updateType} />
        );
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


export default PageBody