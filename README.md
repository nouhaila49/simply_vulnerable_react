# Simply Vulnerable Application
## Using React and Express

The idea behind this application is to make an application that can demonstrate vulnerabilities when using React.  Since React is a front-end framework, most of the vulnerabilities are going to be XSS related.


## How to Run

### Running the API
The API serves the backend portions of the test application.  To run it, execute the following commands in a terminal:

```
cd api
npm install
npm start
```

The server starts and listens for connections on port 9000.

### Running the React application

The React application demonstrates various vulnerabilities.  To run the React application, execute the following commands in a terminal:

```
cd client
npm install
npm start
```

## Potentially CxQL Queries

### View all the outputs considered vulnerable to XSS
```
result = Find_Outputs_XSS();
```


### View data flows for all property keys into XSS outputs
```
result = React_Find_PropertyKeys().DataInfluencingOn(Find_Outputs_XSS () );
```


# Notes

* this is wrong - it looks like property keys won't flow to a class but they will flow to a function.  VERIFY
* props don't appear to flow to the ctor of the base class....


Versions prior to 9.2 HF3 do not handle `import` or `requires` if the path includes an extension.  This will affect data flows.

Example of no data flows:

```
import { ReactDomVulnerable } from './client-side-xss/reactdom_vulnerable.jsx';
```

Example where data flows are properly resolved:

```
import { ReactDomVulnerable } from './client-side-xss/reactdom_vulnerable';
```

