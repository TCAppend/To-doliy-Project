export default function WelcomeCard() {

    return (
        <div className="text-3xl bg-[#F9D965] p-4 rounded-2xl">
        <div className="grid grid-cols-2">
          <div>
            <p className="text-3xl">Welcome, User</p>
            <div className="flex flex-col">
              <h3 className="text-sm">This is a description</h3>
              
            </div>
            
          </div>
          <div>
            Rate your mood
          </div>
        </div>
         
      </div>
    );
}