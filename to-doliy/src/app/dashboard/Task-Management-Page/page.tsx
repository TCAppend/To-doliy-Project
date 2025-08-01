'use client';
import { useState } from 'react';

interface Task {
    id: number;
    name: string;
    description: string;
    isCompleted: boolean;
    expDate: Date;
    dateCreated: Date;
    priority: 'Low' | 'Medium' | 'High';
}

export default function Task_Management() {
    // Initial tasks array
    const [tasks, setTasks] = useState<Task[]>([]);

    const [newTask, setNewTask] = useState({
        name: '',
        description: '',
        expDate: '',
        priority: 'Medium' as 'Low' | 'Medium' | 'High'
    });

    // Function to toggle task completion
    const toggleTask = (id: number) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        ));
    };

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();
        setTasks([...tasks, {
          id: tasks.length + 1,
          name: newTask.name,
          isCompleted: false,
          expDate: new Date(newTask.expDate),
          dateCreated: new Date(),
          priority: newTask.priority,
          description: newTask.description,
        }]);
        setNewTask({ name: '', description: '' ,expDate: '', priority: 'Medium' });
    };

    return (
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
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as 'Low' | 'Medium' | 'High' })}
                    className="border p-2 rounded-lg mr-2"
                >
                    <option value="Low">Low Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Add Task
                </button>
            </form>
            <div className="bg-[#F9D965] p-4 rounded-3xl ">
                <a className='p-4 text-4xl'>Today: {tasks.length} available task</a>
            <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              
                {tasks.map(task => (
                    <div key={task.id} className="flex items-center p-4  border rounded-lg bg-[#FCFF58]">
                        
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

                                <p className='text-4xl text-center'>{task.description}</p>
                                
                                <div className='flex items-center mt-2'>
                                    <p>Due: {task.expDate.toLocaleDateString()}</p>
                                <p>Created: {task.dateCreated.toLocaleDateString()}</p>
                                <p>Priority: {task.priority}</p>
                                </div>
                                

                        </div>
                    </div>
                ))}
            </div>
            </div>
            
        </div>
    );
}