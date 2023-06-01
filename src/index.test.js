const getPercents = require('./index.js');


describe('return perсent from number', () => {
    it('correct case', () => {
      expect(getPercents(35,120)).toBe(42);
    });
    it('correct case', () => {
        expect(getPercents(30,120)).toBe(4);
      });
    it('correct case', () => {
        expect(getPercents(35,'string')).toBeNaN();
      });
  });