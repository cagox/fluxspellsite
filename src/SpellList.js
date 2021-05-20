import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AppContext} from './AppContext.js'

function SpellURL(props) {
    const context = useContext(AppContext);
        let new_title = "Spell: " + props.name;

        return(
            <button className="link" onClick={() => {context.setPage("spellView"); context.setSpell(props.spell_id); context.setHeaderTitle(new_title);}}><div className="spell-item">{props.name}</div></button>
        );
}


function SpellList(props) {
    const context = useContext(AppContext)
    const [spells, setSpells] = useState(null);

    useEffect( () => {
        let spellsURI = "";

        if (context.school === "all") {
            spellsURI = context.apiroot + "/spells";
        }
        else {
            spellsURI = context.apiroot + "/schools/" + context.school + "/spells";
        }

        axios.get(spellsURI).then((spellList) => {setSpells(spellList.data);});

        }, [context.school,context.apiroot]);


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
                        <div className="spell-item"><SpellURL spell_id={item.spell_id} name={item.name} /></div>
                        <div className="spell-item">{item.schools.map((school) => (<span>{school.name}&nbsp; </span>))}</div>
                        <div className="spell-item">{item.types.map((type) => (<span>{type.name}&nbsp; </span>))}</div>
                        <div className="spell-item">{item.summary}</div>
                    </div>
                )
            )}
        </span>
    );

}


export default SpellList;
