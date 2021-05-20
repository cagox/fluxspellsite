import React, {useContext, useEffect, useState} from 'react';
import AppContext from './AppContext';

function SpellView(props) {
  const context = useContext(AppContext);
  
  const [spell, setSpell] = useState(null);
  
  useEffect( () => {
    let spellURI = "";
    if (context.spell === "none") {
      setSpell(null)
    }
    else {
      spellsURI = context.apiroot + "/spells/" + context.spell;
      axios.get(spellURI).then((spellItem) => {setSpell(spellItem.data);});
    }
  }, [context.spell,context.apiroot]);
  
  
  return(
    <div>
      Stuff will go here.
    </div>
  );
  
  
}

export default SpellView;
