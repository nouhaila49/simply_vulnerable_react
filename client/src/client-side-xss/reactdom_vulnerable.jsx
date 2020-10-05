import ClientSideXSSBase from './client-side-xss.jsx'
import React from 'react';

export class ReactDomVulnerable extends ClientSideXSSBase {
    onSubmit(event) {
        this.setState({ submittedFormValue: this.state.formValue });
        event.preventDefault();
    }

    resultDisplay ()
    {
        return (<div className="result" dangerouslySetInnerHTML={{ __html: this.state.submittedFormValue }}></div>);
    }


    discussion() {
        return (
            <div>
                This uses the property dangerouslySetInnerHTML to inject user input into the DOM.  This is similar to
                the use of the document DOM but uses React's capabilities to inject untrusted content.
            </div>
        );

    }
}

