import React from 'react';
import MemeListEntry from './memeListEntry';

export default function MemeList(props){
    return (
        <div >
            <h3></h3>
            <div>
                {props.memes.map(meme => (
                    <body key={meme.id}>
                    <MemeListEntry meme={meme} saveMeme={props.saveMeme} />
                    </body>
                ))}
                </div>
        </div>
    )
}