'use client';
import { useEffect, useState } from 'react';

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

        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
        
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Task Management</h1>
            <form onSubmit={addTask} className="mb-4">
                <input
                    type="text"
                    placeholder="Task name"
                    value={newTask.name}
                    onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                    required
                    className="border p-2 rounded-lg mr-2"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    required
                    className="border p-2 rounded-lg mr-2"
                />
                <input
                    type="date"
                    value={newTask.expDate}
                    onChange={(e) => setNewTask({ ...newTask, expDate: e.target.value })}
                    required
                    className="border p-2 rounded-lg mr-2"
                />
                <select
                    value={newTask.priority}
                    onChange={(e) =>
                        setNewTask({ ...newTask, priority: e.target.value as 'Low' | 'Medium' | 'High' })
                    }
                    className="border p-2 rounded-lg mr-2"
                >
                    <option value="Low">Low Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Add Task
                </button>
            </form>

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
                                    <input
                                        type="checkbox"
                                        checked={task.isCompleted}
                                        onChange={() => toggleTask(task.id)}
                                        className="ml-4"
                                    />
                                </div>

                                <p className="text-base text-center px-2 py-1 break-words justify-items-center">{task.description}</p>      
                            </div>
                            <div className="flex justify-between items-center mt-2 flex-wrap gap-2 text-sm">
                                    <p>Due: {new Date(task.expDate).toLocaleDateString()}</p>
                                    <p>Priority: {task.priority}</p>
                                </div>
                        </div>
                    ))}
                    <div className="items-center p-4 border rounded-lg bg-[#FCFF58]">
                            <div className="text-center">
                                    <h3 className="text-4xl mb-2">
                                        +
                                    </h3>
                                    <h3 className='text-2xl mb-2'>
                                        Add what to do
                                    </h3>
                            </div>
                        </div>
                </div>
            </div>
        </div>
</>
        
    );
}
