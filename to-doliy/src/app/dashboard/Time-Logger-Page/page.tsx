export default function Time_Logger() {

    return (
      <>
{/* Top Page*/}
      <div className="p-4 text-black">
    <div className="bg-[#F9D965] p-4 rounded-3xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">

      </div>
      </ div>
      </div>
  {/* Body Page*/}
    <div className="p-4 text-black">
    <div className="bg-[#F9D965] p-4 rounded-3xl">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
      </ div>
      </div>
      </>
      
    );

}