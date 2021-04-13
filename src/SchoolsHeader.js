import React from 'react';
import axios from 'axios';


class SchoolURL extends React.Component {
    render(){
        let new_title = "School of " + this.props.name;

        return(
            <button className="link" onClick={() => this.props.updateState({page: "schoolView", school_id: this.props.school_id, header_title: new_title})}><span>{this.props.name}&nbsp; </span></button>
        );
    }
}

/*
 * TODO: Figure out the right way to handle links in a react app so that the page
 *  only updates the parts that need to be updated.
 */
class SchoolsHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            schools: null
        };

        axios.get(this.props.apiroot+"/schools/").then((schoollist) => {
            this.setState({
                    schools: schoollist.data
            }
            )
        });
    }

    render(){
        if(this.state.schools === null) {
            return(
                <div className="schools"><a href="/">Top</a>&nbsp;</div>
            );
        }

        return(
            <div className="schools page_header">
                    <a href="/">Top</a>&nbsp;
                    {this.state.schools.map((item) => <SchoolURL updateState={this.props.updateState} key={item.school_id}  school_id={item.school_id} name={item.name} apiroot={this.props.apiroot} viewschool={this.props.viewschool}/>)}
            </div>
        );

    /* render(){
        return(
            <SchoolURL name="Arcane" school_id="10" />
        ); */
    }



}


export default SchoolsHeader;

