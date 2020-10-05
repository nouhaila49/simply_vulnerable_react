import React from 'react';


function InnerElement(props) {
    const script = "<div onMouseOver=\"".concat(props.embeddedScript, "\">HOVER HERE TO INVOKE EMBEDDED SCRIPT</div>");

    return (
        <div className="result" dangerouslySetInnerHTML={{ __html: script }} />
    );
}


export function Embedded(props) {

    // There should be flow from "script" to dangerouslySetInnerHtml
    const script = "alert('an embedded script is running');";

    return (
        <InnerElement embeddedScript={script} />
    );

}


export class EmbeddedDerivation extends React.Component {
    constructor(props) {
        super(props);
        
        this.script = props.script;

    }

    render() {
        return (
            <InnerElement embeddedScript={this.script} />
        );

    }
}



