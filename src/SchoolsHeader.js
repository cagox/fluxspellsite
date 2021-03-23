import React from 'react';


class SchoolURL extends React.Component {
    render(){
        return(
            <a href={"/schools/"+this.props.school_id}>{this.props.name}</a>
        );
    }
}

class SchoolsHeader extends React.Component {
    /*Lots of setup here.*/

    render(){
        return(
            <SchoolURL name="Arcane" school_id="10" />
        );
    }

}


export default SchoolsHeader;