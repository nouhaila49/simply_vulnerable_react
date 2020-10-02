import ClientSideXSSBase from './client-side-xss.jsx'
import React from 'react';

export class ReactDomVulnerable extends ClientSideXSSBase {
    onSubmit(event) {
        this.setState({ submittedFormValue: this.state.formValue });
        event.preventDefault();
    }


    render() {

        return (
            <div>

                <h1>{this.props.headerText}</h1>

                <p>Try pasting "&lt;div onmouseover="alert('hi');"&gt;test&lt;/div&gt;" in the Value box,
                    then mouse-over the value box.</p>


                <form onSubmit={this.onSubmit}>
                    <label>
                        Value:
                    <input type="text" onChange={this.onChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="result" dangerouslySetInnerHTML={{ __html: this.state.submittedFormValue }} />
            </div>
        );
    }

}

