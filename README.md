# mole-server [![Build Status](https://travis-ci.org/molejs/mole.js.svg?branch=master)](https://travis-ci.org/molejs/mole.js)

Mole.js is one of the three independent packages that form the whole Mole service.
It is a reporting library, that gathers action-states on a js application and reports
errors to the mole-server, including the action-states prior to the error.

It's extremely easy to implement, especially with data-workflow handlers such as
[redux](https://github.com/rackt/redux).

All the reported logs follow the **mole log specification**.

## Install

```
npm install --save mole.js
```

## Configure and run

The only configuration required is for setting the error-server url:

```javascript
import Mole from 'mole.js'

Mole.config({url: 'http://errors.example.com/mole'});

```

To record errors, simply report them.

```javascript
import Mole from 'mole.js'

Mole.report(error);

```

In order to record app action-state history, record every action and state.

```javascript
import Mole from 'mole.js'

Mole.registerActionState(action, state);

```

## Optional config

Extra config options are self-explanatory (values in the example are defaults).
```javascript
import Mole from 'mole.js'

Mole.config({
    url: '',
    stacktraceLimit: 50,
    historyLimit: 10
});

```