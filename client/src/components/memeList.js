import React from 'react';
import MemeListEntry from './memeListEntry';

export default function MemeList(props){
    return (
        <div>
            <h3>da memes</h3>
            <ul>
                {props.memes.map(meme => (
                    <li key={meme.id}>
                    <MemeListEntry meme={meme} /*saveMeme={props.saveMeme}*/ />
                    </li>
                ))}
            </ul>
        </div>
    )
}