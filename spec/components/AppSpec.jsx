describe('App', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDomComponentsWithClass
  } = React.addons.TestUtils;

  var app;

  beforeEach(function() {
    app = renderIntoDocument(
      <App />
    );
  });

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });
});