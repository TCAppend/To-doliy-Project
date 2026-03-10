export default function Mood_Page() {

    return (
      <>
      <div className='bg-[#F9D965] p-4 rounded-3xl flex justify-between items-center'>
        <h1 className="text-2xl font-semibold ">
          Today:Rate your mood
          </h1>
          <button
        
        className="btn rounded-full bg-[#F3C623] px-3 sm:px-4 py-2 text-lg sm:text-xl hover:bg-[#FCFF58] border-none text-black shadow-md transition-colors duration-200">
      </button>
      </div>

      <div className='bg-[#F9D965] p-2 rounded-3xl mt-4 grid grid-cols-4 '>
        <div className="bg-[#FCFF58] col-span-3 p-4 rounded-2xl text-black">
          Notes
          <div className="bg-[#FDFF9E]">
          <textarea            placeholder="Start journaling your thoughts here..."
            className="w-full p-2 border rounded-lg resize-none bg-[#FDFF9E] text-black"
          />

          </div>
        </div>
        <div className="bg-[#FFB22C] p-20 rounded-3xl text-black">
          Journal
        </div>
      </div>
      </>
    );

}