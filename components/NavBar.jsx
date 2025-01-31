import React from 'react';

export default function Navbar({ changePage, vertical }) {
    return (
        <ul className={`flex ${vertical ? 'flex-col space-y-2' : 'flex-row space-x-4'}`}>
            <li><button onClick={() => changePage('accueil')}>Accueil</button></li>
            <li><button onClick={() => changePage('histoire')}>Histoire</button></li>
            <li><button onClick={() => changePage('galerie')}>Galerie</button></li>
            <li><button onClick={() => changePage('programme')}>Programme</button></li>
            <li><button onClick={() => changePage('contact')}>Contact</button></li>
        </ul>
    );
}