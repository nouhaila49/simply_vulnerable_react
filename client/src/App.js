import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

import { Vulnerable } from './client-side-xss/vulnerable.jsx';
import { ReactDomVulnerable } from './client-side-xss/reactdom_vulnerable.jsx';
import { Safe } from './client-side-xss/safe.jsx';
import { Href } from './client-side-xss/href.jsx';
import { Embedded, EmbeddedDerivation } from './client-side-xss/embedded.jsx';
import { RemoteUnsafe } from './server-side-xss/remote_unsafe.jsx';
import { RemoteSafe } from './server-side-xss/remote_safe.jsx';
import { UnsafeRenderFunc, SafeRenderFunc } from "./server-side-xss/remote_render_funcs";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(event) {

    fetch('http://localhost:9000/inject')
      .then(response => response.text())
      .catch (() => "Server Unavailable")
      .then (body => this.setState ({injected: body}));
  }


  render() {
    return (
      <div>
        {/* A component that injects user submitted values into the DOM. If XSS was
        a possibility, entering a script would cause it to execute     */}
        <Vulnerable headerText="Vulnerable Component (Document DOM Write)" />
        <hr />
        <ReactDomVulnerable headerText="Vulnerable Component (React DOM Write)" />
        <hr />
        <Safe headerText="Safe Component" />
        <hr />
        <Href />
        <hr />
        {
          // No inputs on the "embedded" components but each is embedding a script unsafely.  This is primarly to test data flow.
          // Vulnerable flows would not be expected to be found for these components.
        }
        <Embedded />
        <hr />
        <EmbeddedDerivation script={"alert('embedded script for a component derived from React.Component');"} />

        <RemoteUnsafe src="http://localhost:9000/inject" />
        <RemoteSafe src="http://localhost:9000/inject" />


        <hr />
        {
          // A different method to render the remote XSS injections
        }
        <p>This is rendered as a function.  Click the button to inject remote content.</p>
        <Button onClick={this.fetchData.bind(this)}>ClickMe!!!</Button>
        <SafeRenderFunc val={this.state.injected} />
        <UnsafeRenderFunc val={this.state.injected} />


      </div>
    );
  }
}

export default App;
