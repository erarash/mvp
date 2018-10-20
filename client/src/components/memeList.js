import React from 'react';
import MemeListEntry from './memeListEntry';

export default function MemeList(props){
    return (
        <div>
            <h3>whatchu need fam</h3>
            <div class="unstyled">
                {props.memes.map(meme => (
                    <p key={meme.id}>
                    <MemeListEntry meme={meme} saveMeme={props.saveMeme} />
                    </p>
                ))}
            </div>
        </div>
    )
}