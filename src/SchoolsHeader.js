import React from 'react';
import axios from 'axios';


class SchoolURL extends React.Component {
    render(){
        let new_title = "School of " + this.props.name;

        return(
            <button className="link" onClick={() => this.props.updateState({page: "schoolView", school_id: this.props.school_id, header_title: new_title})}><div className="school-item">{this.props.name}</div></button>
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

        axios.get(this.props.apiroot + "/schools/").then((schoollist) => {
            this.setState({
                    schools: schoollist.data
                }
            )
        });
    }


    render() {
        if (this.state.schools === null) {
            return (
                <div className="schools"><a href="/">Top</a>&nbsp;</div>
            );
        }

        return (
            <span>
                <div className="header-grid">
                    <div className="header">Schools</div>
                </div>
                <div className="schools-grid">
                        <div className="school-item"><a href="/">Top</a></div>
                    {this.state.schools.map((item) => <SchoolURL updateState={this.props.updateState}
                                                                 key={item.school_id} school_id={item.school_id}
                                                                 name={item.name} apiroot={this.props.apiroot}
                                                                 viewschool={this.props.viewschool}/>)}
                    {this.getSpacersFor(this.state.schools.length+1)}
                </div>
                {/*end schools-grid*/}
            </span> /*TODO: Add code to count schools (+1 for top) and then do spacers = count%5, and create that many blank spacers. */
        );
    }

    getSpacersFor(count) {
        let spacersNeeded = 5-(count%5);
        if (spacersNeeded === 0) {
            return
        }
        var spacers = new Array(spacersNeeded)
        for(let i = 0; i < spacersNeeded; i++) {
            spacers[i] = <div className="school-item">&nbsp;</div>;
        }
        return spacers;
    }




}


export default SchoolsHeader;

