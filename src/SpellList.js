import React from 'react';
import axios from 'axios';

class SpellURL extends React.Component {
    render() {
        let new_title = "Spell: " + this.props.name;

        return(
            <button className="link" onClick={() => this.props.updateState({page: "spellView", spell_id: this.props.spell_id, header_title: new_title})}><div className="spell-item">{this.props.name}</div></button>
        );
    }
}



class SpellList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            spells: null,
            school_id: this.props.school_id
        };

    }

    createSpellList(){
        if(this.state.spells === null) {
            return(<div className="row"><div className="twelve columns">No spells in this school.</div></div>)
        }

        return(
            this.state.spells.map(
                (item) => (
                    <div className="spell-grid">
                        <div className="spell-item"><SpellURL spell_id={item.spell_id} name={item.name} updateState={this.props.updateState} /></div>
                        <div className="spell-item">{item.schools.map((school) => (<span>{school.name}&nbsp; </span>))}</div>
                        <div className="spell-item">TYPES</div>
                        <div className="spell-item">{item.summary}</div>
                    </div>
                )
            )
        );


    }

    render() {
        let spellsURI = "";

        if (this.props.school_id === "all") {
            spellsURI = this.props.apiroot + "/spells";
        }
        else {
            spellsURI = this.props.apiroot + "/schools/" + this.state.school_id + "/spells";
        }

        axios.get(spellsURI).then((spellList) => {

            this.setState({
                    spells: spellList.data
                }
            )
        });


        return(
            <span>
                <div className="header-grid">
                    <div className="header">Spells</div>
                </div>
                <div className="spell-header-grid spell-header">
                    <div className="spell-header-item">Spell Name</div>
                    <div className="spell-header-item">Schools</div>
                    <div className="spell-header-item">Types</div>
                    <div className="spell-header-item">Summary</div>
                </div>
                {this.createSpellList()}
            </span>
        );
    }



}

export default SpellList;
