import React from 'react';
import axios from 'axios';

class SpellURL extends React.Component {
    render() {
        let new_title = "Spell: " + this.props.name;

        return(
            <button className="link" onClick={() => this.props.updateState({page: "spellView", spell_id: this.props.spell_id, header_title: new_title})}><span>{this.props.name}&nbsp; </span></button>
        );
    }
}



class SpellList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            spells: null
        };
        let spellsURI = "";

        if (this.props.school_id === "all") {
            spellsURI = this.props.apiroot + "/spells";
        }
        else {
            spellsURI = this.props.apiroot + "/schools/" + this.props.school_id + "/spells";
        }

        console.log("spellsURI: " + spellsURI);

        axios.get(spellsURI).then((spellList) => {

            this.setState({
                    spells: spellList.data
                }
            )
        });


    }

    createSpellList(){
        if(this.state.spells === null) {
            return(<div className="row"><div className="twelve columns">No spells in this school.</div></div>)
        }

        return(
            this.state.spells.map(
                (item) => (
                    <div className="row">
                        <div className="three columns start-column"><SpellURL spell_id={item.spell_id} name={item.name} updateState={this.props.updateState} /></div>
                        <div className="three columns">{item.schools.map((school) => (<span>{school.name}&nbsp; </span>))}</div>
                        <div className="six columns">{item.summary}</div>
                    </div>
                )
            )
        );


    }

    render() {
        return(
            <span>
                {/*Spell List Header*/}
                <div className="row">&nbsp; </div>
                <div className="row page_header">
                    <div className="three columns header_title start-column">Spell Name</div>
                    <div className="three columns header_title">Schools</div>
                    <div className="six columns header_title">Summary</div>
                </div>
                {/*end Spell List Header*/}
                {this.createSpellList()}
            </span>
        );
    }



}

export default SpellList;
