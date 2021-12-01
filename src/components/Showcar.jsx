import React from 'react';

const Showcar = (props) => {
    props.data.map(item=>
        console.log(item.type)
    )
    return (
        <div>
            
        </div>
    );
}

export default Showcar;
