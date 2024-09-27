/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";


function TaskForm(  ) {

  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">AÑADIR TAREAS</h1>
      <input
        placeholder="escribe tu tarea" required
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus 
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <textarea placeholder="Ingresa tu tarea"  required
      onChange={e => setDescription(e.target.value)} 
      value={description}
      className="bg-slate-300 p-3 w-full mb-2"
      >
       
      </textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
