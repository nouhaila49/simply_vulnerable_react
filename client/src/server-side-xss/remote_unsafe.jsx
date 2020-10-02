import React from 'react';
import Button from 'react-bootstrap/Button';

export class RemoteUnsafe extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {};
        
        this.onClick = this.onClick.bind(this);
    }

    onClick (event)
    {
        fetch('http://localhost:9000/inject')
        .then (response => response.text())
        .then (body => this.setState ({injected: body}));
    }

    render ()
    {

        return (

            <div>
                <p/>
                <hr/>
                Click button to unsafely inject content from "{this.props.src}"
                <br/>
                <Button onClick={this.onClick}>ClickMe</Button>
                <div className="result" dangerouslySetInnerHTML={{__html: this.state.injected}}/>

            </div>
            
        );
    }


}


