import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

// This is a functional Component (as opposed to a class Component)
// Components in React ONLY cares about doing one particular thing, in this case 
// wrapping the children of our props (i.e. our h1's) into divs with a specific style

// state is there to re-render an application when a user had done something with the app. For instance, if we only had a title and subtitle that never change,
// then we would pass those components as props, without using states. A state is dealt with inside the component whereas a props is handled outside of the component.
// Props are for things that are passed from the parent, and that don't change.
export const CardList = props => (
    <div className='card-list'> 
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);