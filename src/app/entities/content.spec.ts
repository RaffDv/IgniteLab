import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create notification content', () => {
    const content = new Content('voce tem uma nova notficacao');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification conten wich less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification conten wich more than 240 characters', () => {
    expect(() => new Content('a'.repeat(250))).toThrow();
  });
});
