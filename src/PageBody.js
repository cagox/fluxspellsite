import React from 'react';

class PageBody extends React.Component {


    render() {
        if (this.props.page === "indexPage" ) {
            return(
                <div>This is the index.</div>
                /*<IndexView pageIndex={this.props.page_index} />*/
            );
        }

        /*
            if page === "schoolView"
            return <SchoolView school_id={this.props.school_id} pageIndex={this.props.page_index} />
         */

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

export default PageBody;
