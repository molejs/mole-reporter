import expect from 'expect';
import initMole from '../src/mole.js';

let Mole;

beforeEach(function() {
  Mole = Object.assign({}, initMole);
});

describe('config method', () => {
  it('should update config values', () => {
    var url = 'foo';
    Mole.config({url});
    expect(Mole.configObj.url).toEqual(url);
  });

  it('should throw error when calling config without setting url', () => {
    expect(() => Mole.config({stacktraceLimit: Infinity})).toThrow(Error);
  });
});

describe('actionStateHistory property', () => {
  it('should be empty, initially', () => {
    expect(Mole.stateHistory.length).toEqual(0);
  });

  it('should contain what was added through registerActionState', () => {
    var state = {a: 'bar'};
    var action = 'FOO';
    Mole.registerActionState(action, state);
    expect(Mole.stateHistory[0]).toEqual({action, state});
  });

  it('should contain as many items as added through registerActionState', () => {
    var state = {a: 'qux'};
    var action = 'fog';
    Mole.stateHistory = [];
    Mole.registerActionState(action, state);
    Mole.registerActionState(action, state);
    Mole.registerActionState(action, state);
    Mole.registerActionState(action, state);
    expect(Mole.stateHistory.length).toEqual(4);
  });
});

describe('report method', () => {
  // TODO
});

