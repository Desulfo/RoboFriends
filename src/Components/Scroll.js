import React from 'react';

const Scroll = (props) => {
    return (
        <section style={{overflowY: 'scroll', height: '500px'}}>
            {props.children}
        </section>
    )
}

export default Scroll;