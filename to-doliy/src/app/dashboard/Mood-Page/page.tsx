'use client';

interface JournalEntry {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  dateCreated: string;
  Mood: '1' | '2' | '3' | '4' | '5';
}

import { useState } from 'react';

export default function Mood_Page() {

  const [journals, setJournals] = useState<JournalEntry[]>([]);
  const [activeJournal, setActiveJournal] = useState<JournalEntry | null>(null);
  const [editingJournalId, setEditingJournalId] = useState<number | null>(null);

  const addJournal = () => {
    const newJournal: JournalEntry = {
      id: journals.length + 1,
      name: `Journal ${journals.length + 1}`,
      description: '',
      isCompleted: false,
      dateCreated: new Date().toLocaleDateString(),
      Mood: '3',
    };
    setJournals([...journals, newJournal]);
  };

  const updateJournal = (id: number, field: keyof JournalEntry, value: string) => {
    setJournals((prevJournals) =>
      prevJournals.map((journal) =>
        journal.id === id ? { ...journal, [field]: value } : journal
      )
    );

    if (activeJournal && activeJournal.id === id) {
      setActiveJournal({ ...activeJournal, [field]: value });
    }
  };

  return (
    <>
      <div className='bg-[#F9D965] p-4 rounded-3xl flex justify-between items-center'>
        <h1 className="text-2xl font-semibold">Today: Rate your mood</h1>
        <button
          className="btn rounded-full bg-[#F3C623] px-3 sm:px-4 py-2 text-lg sm:text-xl hover:bg-[#FCFF58] border-none text-black shadow-md transition-colors duration-200">
        </button>
      </div>

      <div className='bg-[#F9D965] p-2 rounded-3xl mt-4 grid grid-cols-4 gap-4'>
        <div className="bg-[#FFB22C] rounded-2xl p-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Journal List:</h2>
          <ul className="space-y-2">
            {journals.map((journal) => (
              <li key={journal.id} className="flex items-center gap-2">
                {editingJournalId === journal.id ? (
                  <input
                    type="text"
                    value={journal.name}
                    onChange={(e) => updateJournal(journal.id, 'name', e.target.value)}
                    onBlur={() => setEditingJournalId(null)}
                    className="border p-1 rounded text-black w-full"
                    autoFocus
                  />
                ) : (
                  <span>{journal.name}</span>
                )}
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setEditingJournalId(journal.id)}
                >
                  Edit
                </button>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setActiveJournal(journal)}
                >
                  Open
                </button>
              </li>
            ))}
          </ul>
          <button
            className="btn rounded-full bg-[#F3C623] text-lg sm:text-xl hover:bg-[#FCFF58] border-none text-black shadow-md transition-colors duration-200 mt-4"
            onClick={addJournal}
          >
            <span className="text-xl font-bold">+</span>
            <span className="hidden sm:inline ml-1">Add Journal</span>
          </button>
        </div>

        <div className="bg-[#FCFF58] col-span-3 p-4 rounded-2xl text-black">
          {activeJournal ? (
            <>
              <h3 className="font-bold text-2xl mb-4">
                {activeJournal.dateCreated} {activeJournal.name}
              </h3>
              <textarea
                value={activeJournal.description}
                onChange={(e) => updateJournal(activeJournal.id, 'description', e.target.value)}
                placeholder="Write your thoughts here..."
                className="bg-neutral-secondary-medium text-heading text-sm rounded-base block w-full h-64 p-5 shadow-xs resize-y"
              />
            </>
          ) : (
            <p className="text-gray-500">Select a journal from the list to start writing.</p>
          )}
        </div>
      </div>
    </>
  );
}