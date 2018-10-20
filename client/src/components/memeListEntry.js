import React from 'react';

export default function MemeListEntry(props){
    console.log(props.meme.source)
    return (
        <div className='entry' /*onCLick={() => props.saveMeme(props.meme.url) }*/>
            <img src={props.meme.images.original.gif_url}/>
        </div>
    )
}