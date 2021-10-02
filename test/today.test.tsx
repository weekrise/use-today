import useToday from '../src';

describe('today', () => {
  it('exports', () => {
    expect(useToday).toBeDefined();
    expect(useToday).toBeInstanceOf(Function);
  });
});
