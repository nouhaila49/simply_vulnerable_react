import React from 'react';

class ClientSideXSSBase extends React.Component {

    constructor(props) {
        super(props);

        this.state = { formValue: '' };

        this.onChange = this.onChange.bind(this);

        this.divRef = React.createRef();

        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ formValue: event.target.value });
    }

    onSubmit(event) {

    }

    instructions() {
        return (
            <p>Try pasting "&lt;div onmouseover="alert('hi');"&gt;test&lt;/div&gt;" in the Value box,
            then mouse-over the value box.</p>
        );
    }

    resultDisplay() {
        return (<div className="result" ref={this.divRef} id='targetDiv' />);
    }

    render() {

        return (
            <div>

                <h1>{this.props.headerText}</h1>

                {this.instructions()}

                <form onSubmit={this.onSubmit}>
                    <label>
                        Value:
                    <input type="text" value={this.state.formValue} onChange={this.onChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                {this.resultDisplay()}

            </div>
        );
    }

}

export default ClientSideXSSBase;