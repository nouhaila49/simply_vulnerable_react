import React from 'react';
import ClientSideXSSBase from './client-side-xss.jsx'

export class Href extends ClientSideXSSBase {

    constructor(props) {
        super(props);
        this.state = {};

    }

    onSubmit(event) {
        this.setState({ href: this.state.formValue });
        event.preventDefault();
    }


    instructions() {
        return (
            <div>
                <h1>Anchor injection example</h1>

                <p>Try pasting "javascript: alert("hi");" in the box, then click the link.</p>
            </div>
        );
    }

    resultDisplay() {
        // Note there is no DOM injection here.  Future versions of React are supposedly going to
        // block this assignment.  For now, the value is not sanitized by the React framework.
        return (<a className="result" href={this.state.href}>ClickMe</a>);
    }
}

