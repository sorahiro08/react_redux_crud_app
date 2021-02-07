
function App() {
  const greeting = "Hi! Tom!";
  const dom = <h1 className="foo">{greeting}</h1>;
  return (
    <>
      {dom}
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={ () => {console.log("I am Changed!")} } />
      <Cat />
      <Cat />
      <Cat />
    </>
  );
}

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
