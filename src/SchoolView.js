import React from 'react';
import axios from 'axios';
import SpellList from './SpellList.js';

class SchoolView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "",
        };



    }

    render() {
        axios.get(this.props.apiroot+"/schools/"+this.props.school_id).then((school) => {
            this.setState({
                description: school.data.description,
                school_id: school.data.school_id
            })});
        return(
            <span>
                <div className="school-summary-grid">
                    <div className="summary-spacer">&nbsp;</div>
                    <div className="summary-box">{this.state.description}</div>
                    <div className="summary-spacer">&nbsp;</div>
                </div>
                <SpellList apiroot={this.props.apiroot} school_id={this.props.school_id} updateState={this.props.updateState} />
            </span>
        );
    }

}


export default SchoolView;
