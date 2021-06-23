import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState()
  const [task, setTask] = useState([])
  const input = useRef(null)

  function handlesubmit(e) {
    setValue(e.target.value)
    if (e.keyCode === 13) {
      addTask(e.target.value)
      e.target.value = ""
    }
  }

  function addTask(value) {
    if (value !== "") {
      const add = task.concat(value)
      setTask(add)
      input.current.value = ""
      setValue([])
    }

  }

  function deleteTask(index) {
    task.splice(index, 1)
    addTask([])

  }

  return (
    <>
      <div className="container p-5">
        <div className="p-3 mb-2 bg-primary text-white rounded text-center"><h1>Todo List</h1></div>
        <div className="input-group mb-3">
          <input ref={input} type="text" className="form-control" placeholder="Insert Task" aria-label="Recipient's username" aria-describedby="button-addon2" onKeyUp={handlesubmit} />
          <div className="input-group-append">
            <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={() => addTask(value)}>Add</button>
          </div>
        </div>

        <div className="card p-2">
          <div className="card-body">
            {
              !!task &&
              task.map((value, index) => {
                return (
                  <>
                    <p key={index} class="card-text">{value}<div class="btn btn-group input-group-append" role="group" aria-label="..." onClick={() => deleteTask(index)}><i class="fas fa-times-circle text-danger "></i></div></p>
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
