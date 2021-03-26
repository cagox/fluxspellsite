import React from 'react';
import axios from 'axios';


class SchoolURL extends React.Component {
    render(){
        return(
            <span><a href="#"  >{this.props.name}</a>&nbsp;</span>
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
        console.log('Does this exist?');
        /*Fix this host in production*/
        axios.get(this.props.apiroot+"/schools/").then((schoollist) => {
            this.setState({
                    schools: schoollist.data.map((item) => <SchoolURL school_id={item.school_id} name={item.name} apiroot={this.props.apiroot} viewschool={this.props.viewschool}/>
                    ),
            }
            )
        });
    }

    render(){
        if(this.state.schools === null) {
            console.log('It is null.')
            return(
                <div className="row page_header"></div>
            );
        }

        return(
            <div className="row page_header">
                <center>
                    <a href="/">Top</a>&nbsp;
                    {this.state.schools}
                </center>
            </div>
        );

    /* render(){
        return(
            <SchoolURL name="Arcane" school_id="10" />
        ); */
    }



}


export default SchoolsHeader;