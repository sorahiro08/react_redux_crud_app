
function App() {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hana", age: 5},
    {name: "NoName"},
  ]
  return (
    <>
      {
        profiles.map((pf, i) => {
          return (
            <User key={i} name={pf.name} age={pf.age} />
          );
        })
      }
    </>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>;
};

User.defaultProps = {
  age: 1,
}

export default App;
