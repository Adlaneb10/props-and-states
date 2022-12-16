
import './App.css';
import ReactDOM from 'react'

function Names(passer) {
  return <h1>(This is a prop example) {passer.name}</h1>
}

function Student() {

  return (
    <div>
      <h1>The name of the best student is</h1>
      <Names name={"John"}/>

    </div>
  );
}

export default Student;
