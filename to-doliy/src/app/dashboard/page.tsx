export default function Dashboard() {

    return (
      <>

      <div className="text-3xl bg-[#F9D965] p-4 rounded-2xl">
        <div className="grid grid-cols-2">
          <div>
            <p className="text-3xl">Welcome, User</p>
            <h3 className="text-sm">Welcome, User</h3>
          </div>
          <div>
            Rate your mood
          </div>
        </div>
         
      </div>

      <div className="grid grid-cols-2 mt-4 gap-2">
        <div className="grid grid-row-2 gap-2">
          <div className="bg-[#F9D965] p-4 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Priority Task</h2>
              <p>list</p>
              <p>list</p>
          </div>
          <div className="bg-[#F9D965] p-4 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Schedule for Today</h2>
              <p>list</p>
          </div>
        </div>
          
      <div className="grid grid-row-2 gap-2">
        <div className="bg-[#F9D965] p-4 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Short-Cut Timer</h2>
              <p>List</p>
          </div>
          <div className="bg-[#F9D965] p-4 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Short-Cut Timer</h2>
              <p>List</p>
          </div>
      </div>
          
          
      </div>
      
      </>
    );

}