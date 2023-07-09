import React from 'react'
import ReactDOM from 'react-dom'

// define functional component
function HelloWorld() {
    return <h1>Hello, World!</h1>
}

// render component to dom
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('div_hello_world')
)

