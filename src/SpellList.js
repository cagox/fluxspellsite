import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

function SpellURL(props) {
        let new_title = "Spell: " + props.name;

        return(
            <button className="link" onClick={() => {props.updatePage("spellView"); props.updateSpell(props.spell_id); props.updateHeaderTitle(new_title);}}><div className="spell-item">{props.name}</div></button>
        );
}


function SpellList(props) {
    const [spells, setSpells] = useState(null);

    useEffect( () => {
        let spellsURI = "";

        if (props.school_id === "all") {
            spellsURI = props.apiroot + "/spells";
        }
        else {
            spellsURI = props.apiroot + "/schools/" + props.school_id + "/spells";
        }

        axios.get(spellsURI).then((spellList) => {setSpells(spellList.data);});

        }, [props.school_id,props.apiroot]);


    if(spells === null) {
        return(
            <div className="spell-grid">
                No Spells in this school.
            </div>
        );
    }

    if(spells.length === 0) {
        return(
            <div className="spell-grid">
                No Spells in this school.
            </div>
        );
    }

    return(
        <span>
            <div className="spell-grid">
                <div className="spell-header-item">Spell Name</div>
                <div className="spell-header-item">Schools</div>
                <div className="spell-header-item">Types</div>
                <div className="spell-header-item">Summary</div>
            </div>

            {spells.map(
                (item) => (
                    <div className="spell-grid" key={item.spell_id} >
                        <div className="spell-item"><SpellURL spell_id={item.spell_id} name={item.name} updatePage={props.updatePage} updateSpell={props.updateSpell} updateHeaderTitle={props.updateHeaderTitle} /></div>
                        <div className="spell-item">{item.schools.map((school) => (<span>{school.name}&nbsp; </span>))}</div>
                        <div className="spell-item">TYPES</div>
                        <div className="spell-item">{item.summary}</div>
                    </div>
                )
            )}
        </span>
    );

}


export default SpellList;
