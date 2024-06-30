import { NewlineBreaker } from './newline-breaker.pipe';

describe('NewlineBreakerPipe', () => {
  let pipe: NewlineBreaker;

  beforeEach(() => {
    pipe = new NewlineBreaker();
  });

  it('create an instance', () => {
    const pipe = new NewlineBreaker();
    expect(pipe).toBeTruthy();
  });

  it('transforms "\\n" into "<br>"', () => {
    const text = 'Once upon a time\nThere was a cat';
    const transformed = pipe.transform(text);
    expect(transformed).toEqual('Once upon a time<br>There was a cat');
  });

  it('transforms multiple "\\n" into multiple "<br>"', () => {
    const text = 'Line 1\nLine 2\nLine 3';
    const transformed = pipe.transform(text);
    expect(transformed).toEqual('Line 1<br>Line 2<br>Line 3');
  });
});
