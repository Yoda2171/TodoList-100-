import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState()
  const [task, setTask] = useState([])
  const data= useRef(null) 

  function handlesubmit(e) {
    setInput(e.target.value)

    if(e.keyCode===13){
      addTask(input)
    }
  }

  function addTask(input) {
    const add = task.concat(input)
    setTask(add)
    data.current.value=""
  }

  
  function deleteTask(index) {
    task.splice(index,1)
    addTask([])
  }

  return (
    <>
      <div className="container p-5">
        <div className="p-3 mb-2 bg-primary text-white rounded text-center"><h1>Todo List</h1></div>
        <div className="input-group mb-3">
          <input ref={data} type="text" className="form-control" placeholder="Insert Task" aria-label="Recipient's username" aria-describedby="button-addon2" onKeyUp={handlesubmit} />
          <div className="input-group-append">
            <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={() => addTask(input)}>Add</button>
          </div>
        </div>

        <div className="card p-2">
          <div className="card-body">
            {
              !!task &&
              task.map((value, index) => {
                return (
                  <>
                    <p key={index} class="card-text">{value}<div class="btn btn-group ml-auto" role="group" aria-label="..." onClick={() => deleteTask(index)}><i class="fas fa-times-circle text-danger "></i></div></p>
                  </>
                )
              })
            }

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
