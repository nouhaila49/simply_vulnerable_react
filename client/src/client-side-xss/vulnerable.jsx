import ClientSideXSSBase from './client-side-xss.jsx'

export class Vulnerable extends ClientSideXSSBase
{
    onSubmit (event)
    {
        document.getElementById('targetDiv').innerHTML = this.state.formValue;
        event.preventDefault();
    }

}

