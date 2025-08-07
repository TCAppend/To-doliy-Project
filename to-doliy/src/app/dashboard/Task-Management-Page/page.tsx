'use client';
import { useEffect, useState } from 'react';
import { GoKebabHorizontal } from "react-icons/go"

interface Task {
    id: number;
    name: string;
    description: string;
    isCompleted: boolean;
    expDate: string; // Stored as string
    dateCreated: string; // Stored as string
    priority: 'Low' | 'Medium' | 'High';
}

export default function Task_Management() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoaded, setIsLoaded] = useState(false); // 👈 Added flag
    const [newTask, setNewTask] = useState({
        name: '',
        description: '',
        expDate: '',
        priority: 'Medium' as 'Low' | 'Medium' | 'High',
    });

    const deleteTask = (id: number) => {
  setTasks(prev => prev.filter(task => task.id !== id));
};

    // ✅ Load tasks from localStorage on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('tasks');
            if (stored) {
                setTasks(JSON.parse(stored));
            }
            setIsLoaded(true); // 👈 After loading
        }
    }, []);

    // ✅ Save tasks to localStorage on update
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks, isLoaded]);

    const toggleTask = (id: number) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();
        const newEntry: Task = {
            id: Date.now(),
            name: newTask.name,
            description: newTask.description,
            isCompleted: false,
            expDate: newTask.expDate,
            dateCreated: new Date().toISOString(),
            priority: newTask.priority,
        };
        setTasks(prev => [...prev, newEntry]);
        setNewTask({ name: '', description: '', expDate: '', priority: 'Medium' });
    };

    if (!isLoaded) return null;

    

    return (
<>

        {/* Modal Here */}
        
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-[#F9D965]">
    <h3 className="font-bold text-lg">Add task</h3>
    <div className="">

            <form onSubmit={addTask} className="mb-4 grid grid-cols-1 gap-4">
                <input
                    type="text"
                    placeholder="Task name"
                    value={newTask.name}
                    onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                    required
                    className="border p-2 rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    required
                    className="border p-2 rounded-lg "
                />
                <input
                    type="date"
                    value={newTask.expDate}
                    onChange={(e) => setNewTask({ ...newTask, expDate: e.target.value })}
                    required
                    className="border p-2 rounded-lg "
                />
                <select
                    value={newTask.priority}
                    onChange={(e) =>
                        setNewTask({ ...newTask, priority: e.target.value as 'Low' | 'Medium' | 'High' })
                    }
                    className="border p-2 rounded-lg "
                >
                    <option value="Low">Low Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>
                <div>
                    
                </div>
               <div className='flex justify-end mt-4 gap-1'>
                     <button type="submit" className="btn bg-green-600  text-white px-4 py-2 rounded-lg">
                    Add Task
                </button>
            
        
               </div>
                
            </form>
           <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="-mt-24 btn bg-red-700 px-4 py-2 rounded-lg text-white">Cancel</button>
      </form>

        </div>
      
             
    </div>

</dialog>


        <div className="p-4 text-black">
            
            <div className="bg-[#F9D965] p-4 rounded-3xl">
                <p className="p-4 text-4xl">Today: {tasks.length} available task(s)</p>
                <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {tasks.map((task) => (
                        <div key={task.id} className="flex flex-col p-2 rounded-lg bg-[#FCFF58] w-full">

                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <h3 className={`text-lg ${task.isCompleted ? 'line-through' : ''}`}>
                                        {task.name}
                                    </h3>
                                    <div className='flex items-center gap-2'>
                                        <input
                                        type="checkbox"
                                        checked={task.isCompleted}
                                        onChange={() => toggleTask(task.id)}
                                        className="ml-4"
                                    />
                                    
                                    {/* Delete dropdown (might add more) */}
                                   <details className="dropdown">
  <summary className="btn shadow-[#FCFF58] shadow-2xl border-[#FCFF58] bg-[#FCFF58] text-black text-xl z-1 w-9 p-2">
    <GoKebabHorizontal />
  </summary>
  <ul className="menu dropdown-content rounded-box z-1 w-52 p-2 bg-white shadow-lg">
    <li>
      <button
        onClick={() => deleteTask(task.id)}
        className="hover:bg-red-600 hover:text-white w-full text-left px-4 py-2"
      >
        Delete
      </button>
    </li>
  </ul>
</details>

                                    
                                    </div>
                                    
                                </div> 

                                <p className="text-base text-center px-2 py-1 break-words justify-items-center">{task.description}</p>      
                            </div>
                            <div className="flex justify-between items-center mt-2 flex-wrap gap-2 text-sm">
                                    <p>Due: {new Date(task.expDate).toLocaleDateString()}</p>
                                    <span
                                                className={`px-2 py-1 rounded-full text-white text-xs font-semibold
                                                    ${
                                                    task.priority === 'High'
                                                        ? 'bg-red-600'
                                                        : task.priority === 'Medium'
                                                        ? 'bg-yellow-500 text-black'
                                                        : 'bg-green-600'
                                                    }`}
                                                >
                                                {task.priority}
                                                </span>

                                </div>
                        </div>
                    ))}

                    <button onClick={() =>
    (document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal()
  }>
                <div className="items-center p-4 border rounded-lg bg-[#F9D965] hover:bg-[#FCFF58] transition-colors duration-300">
                            <div className="text-center">
                                    <h3 className="text-4xl mb-2">
                                        +
                                    </h3>
                                    <h3 className='text-2xl mb-2'>
                                        Add what to do
                                    </h3>
                            </div>
                        </div>

                    </button>
                   
                </div>
            </div>
        </div>
</>
        
    );
}
