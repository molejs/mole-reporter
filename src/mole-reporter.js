import fetch from 'fetch';
import ErrorStackParser from 'error-stack-parser';

function getReport(error, stateHistory) {
  return {
    timestamp: (new Date()).toISOString(),
    location,
    userAgent: navigator.userAgent,
    error: {
      message: error.message,
      stacktrace: ErrorStackParser.parse(error).map(stackFrame => ({
        'function': stackFrame.functionName,
        file: stackFrame.fileName,
        line: stackFrame.lineNumber,
        column: stackFrame.columnNumber
      }))
    },
    action_state_history: stateHistory
  };
}

const Mole = {
  stateHistory: [],
  configObj: {
    url: '',
    stacktraceLimit: 50,
    historyLimit: 10
  },
  config (configObj) {
    if (!configObj.url) {
      throw new Error('No url defined.')
    }
    this.configObj = Object.assign({}, this.configObj, configObj);
  },
  registerActionState (action, state) {
    this.stateHistory.push({action, state});
  },
  report (error) {
    let report = getReport(
      error,
      this.stateHistory.slice(-1*this.configObj.historyLimit)
    );
    fetch(this.config.url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(report)
    })
  }
};

export default Mole;