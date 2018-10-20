import React from 'react';

export default function MemeListEntry(props){
    return (
        <div>

        <div onClick={() => props.saveMeme(props.meme.images.original.gif_url) }>
            <img src={props.meme.images.original.gif_url}/>
        </div>

        <div>
            
        </div>

        </div>
    )
}