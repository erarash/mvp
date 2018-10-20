import React from 'react';

export default function MemeListEntry(props){
    return (
        <div className='entry' onClick={() => props.saveMeme(props.meme.images.original.gif_url) }>
            <img src={props.meme.images.original.gif_url}/>
        </div>
    )
}