import DemoPlugin from './cjs';

test('should set options property', () => {
  const opts = {
    test: 'hello',
  };
  const plugin = new DemoPlugin(opts);
  expect(plugin.options).toBe(opts);
});
