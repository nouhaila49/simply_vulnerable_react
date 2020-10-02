import ReactDOM from 'react-dom';
import ClientSideXSSBase from './client-side-xss.jsx'

export class Safe extends ClientSideXSSBase {
    onSubmit(event) {
        ReactDOM.hydrate(this.state.formValue, this.divRef.current);
        event.preventDefault();
    }



}

