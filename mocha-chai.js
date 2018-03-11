var expect = require('chai').expect
    , foo = 'bar'
    , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

describe('A simple test', function() {
    it('should check everything', function () {
        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.lengthOf(3);
        expect(beverages).to.have.property('tea').with.lengthOf(3);
    })
});