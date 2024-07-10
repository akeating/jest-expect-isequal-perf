const { performance } = require('node:perf_hooks');
const _ = require('lodash');

test("lodash isEqual with Float64Arrays is fast", () => {
  const a = Float64Array.from(new Array(120_000));
  const b = Float64Array.from(new Array(120_000));
  const t0 = performance.now();
  expect(_.isEqual(a, b)).toBe(true);
  const t1 = performance.now();
  const durationMs = Math.floor(t1 - t0);
  expect(durationMs).toBeLessThan(50);
});

test("jest expect isEqual with Float64Arrays is fast", () => {
  const a = Float64Array.from(new Array(120_000));
  const b = Float64Array.from(new Array(120_000));
  const t0 = performance.now();
  expect(a).toEqual(b);
  const t1 = performance.now();
  const durationMs = Math.floor(t1 - t0);
  expect(durationMs).toBeLessThan(50);
});
