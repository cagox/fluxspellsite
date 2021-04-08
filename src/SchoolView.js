import React from 'react';
import axios from 'axios';
import SpellList from './SpellList.js';

class SchoolView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: ""
        };

        axios.get(this.props.apiroot+"/schools/"+this.props.school_id).then((school) => {
            this.setState({description: school.data.description})});

    }

    render() {
        return(
            <span>
                <div className="row">&nbsp;</div>
                <div className="row">
                    <div className="four columns">&nbsp;</div>
                    <div className="four columns spellbox">{this.state.description}</div>
                    <div className="four columns">&nbsp;</div>
                </div>
                <div className="row page_header">&nbsp;</div>
                <SpellList apiroot={this.props.apiroot} school_id={this.props.school_id} updateState={this.props.updateState} />
            </span>
        );
    }

}


export default SchoolView;