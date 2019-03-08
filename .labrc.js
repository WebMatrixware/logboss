module.exports = {
  coverage: true,
  threshold: 95,
  lint: true,
  colors: true,
  reporter: ['console', 'html'],
  output: ['stdout', './coverage/testoutput.html'],
  verbose: true,
  assert: 'code'
};
