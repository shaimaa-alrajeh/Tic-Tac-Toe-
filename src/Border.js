import Button from "./Button"

function Border(){
  
    return (
      <div className="flex items-center justify-center w-100 h-screen bg-black">
        <table className=" w-2/3 h-2/3 border-collapse ">
          <tr className="h-1/3 border-b-8">
            <th className="w-1/3">
              <Button />
            </th>
            <th className="border-l-8 w-1/3">
              <Button />
            </th>
            <th className="border-l-8 w-1/3 ">
              <Button />
            </th>
          </tr>

          <tr className="border-b-8 h-1/3">
            <th className="w-1/3">
              <Button />
            </th>
            <th className="border-l-8 w-1/3">
              <Button />
            </th>
            <th className="border-l-8 w-1/3">
              <Button />
            </th>
          </tr>

          <tr className="h-1/3">
            <th className="w-1/3">
              <Button />
            </th>
            <th className="border-l-8 w-1/3">
              <Button />
            </th>
            <th className="border-l-8 w-1/3">
              <Button />
            </th>
          </tr>
        </table>
      </div>
    );
}

export default Border