import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import AppContext from './AppContext.js';
import {apiroot} from './Config';
import {SchoolURL} from './SchoolsHeader.js';


function SpellView() {
    const context = useContext(AppContext);
    const [spell, setSpell] = useState(null);


    useEffect(
        () => {
            let spellURI = apiroot + "/spells/" + context.spell;

            axios.get(spellURI).then((spellData) => setSpell(spellData.data));

        }, [context.page, context.spell]
    );


    if (spell == null) {
        return(
            <div className="header-grid">
                <div className="header">No Spell Found</div>
            </div>
        );
    }


    return(
        <div className="SpellView">
            <div className="header-grid">
                <div className="header">{spell.name}</div>
            </div>

            <div className="spell-cost-grid">
                <div className="spell-view-item bold">Cost:</div>
                <div className="spell-view-item">{spell.cost}</div>
                <div className="spell-view-item bold">Difficulty:</div>
                <div className="spell-view-item">{spell.difficulty}</div>
                <div className="spell-view-item bold">Range:</div>
                <div className="spell-view-item">{spell.spellrange}</div>
            </div>

            <div className="spell-stat-grid">
                <div className="spell-view-item bold">Prerequisites:</div>
                <div className="spell-view-item">{spell.prerequisites}</div>
            </div>
            <div className="spell-stat-grid">
                <div className="spell-view-item bold">School:</div>
                <div className="spell-view-item">{spellSchools(spell)}</div>
            </div>
            <div className="spell-stat-grid">
                <div className="spell-view-item bold">Type:</div>
                <div className="spell-view-item">{spellTypes(spell)}</div>
            </div>
            <div className="spell-stat-grid">
                <div className="spell-view-item bold">Summary:</div>
                <div className="spell-view-item">{spell.summary}</div>
            </div>

            <div className="spell-stat-grid">
                <div className="spell-view-item bold">Description:</div>
                <div className="summary-box">{spell.description}</div>
            </div>
        </div>
    );

}

function spellSchools(spell) {
    return(
        <span>
            {spell.schools.map((item) => <SchoolURL key={item.school_id} school_id={item.school_id} name={item.name} />)}
        </span>

    );
}

function spellTypes(spell) {
    return(
        <span>
            {spell.types.map((item) => <SchoolURL key={item.type_id} school_id={item.type_id} name={item.name} />)}
        </span>

    );
}


export default SpellView;