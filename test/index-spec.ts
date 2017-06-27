import 'mocha';
import * as chai from 'chai';
import * as ddg from '../src/index';

const expect = chai.expect;

describe('search', () => {
  it('search for "Microsoft Corp"', done => {
    this.timeout = 5000;
    ddg.search('Microsoft Corp')
      .then(result => {
        expect(result.Abstract).to.be.a('string');
        expect(result.Abstract.indexOf('Microsoft')).to.not.equal(-1);
        expect(result.Entity).to.equal('company');
        done();
      });
  });
});
