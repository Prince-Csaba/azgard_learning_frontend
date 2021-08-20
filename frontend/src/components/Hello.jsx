import React from 'react';
import Quote from './Quote';
import { Link } from 'react-router-dom';

function Hello() {
  return (
    <div className="hello">
      <h1>Üdvözöllek Azgardban!</h1>
      <h3>Tanulj, olvass, igyál egy sört, érezd jól magad!<br />
        De ne feledd, csak a bátrak jutnak a Valhallába!<br />
        Csakis a félelem meg a tunyaság az ellenséged! <br />
        Vágj bele hát, és találkozunk Odin asztalánál!</h3>
      <Quote />
      <Link to='/basicCourse'>Képzések</Link>
    </div>
  );
}

export default Hello;