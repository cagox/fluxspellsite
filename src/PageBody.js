import React, {useContext} from 'react';
import {AppContext} from './AppContext.js';
import SpellList from './SpellList.js';
import SchoolView from './SchoolView.js';



function PageBody(props){
    const context = useContext(AppContext);
    if (context.page === "indexPage" ) {
        return(
            <SpellList />
        );
    }

    if (context.page === "schoolView") {
        return (<SchoolView />
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
        <div>If you are seeing this, the page value was not set properly if you see this, pleace contact <a href="mailto:fluxrpg@cagox.net">FluxRPG@cagox.net</a>.</div>
    );


}


export default PageBody
