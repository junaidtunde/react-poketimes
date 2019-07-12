import React from 'react'

export default function Rainbow(WrapperComponent) {

    const colors = ['blue', 'green', 'yellow', 'red', 'indigo', 'brown'];
    const selectedColor = colors[Math.floor(Math.random() * 5)] + '-text';

    return (props) => {
        return (
            <div className={selectedColor}>
                <WrapperComponent {...props} />
            </div>
        )
    }
}
