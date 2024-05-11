import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const Dashboard = async () => { 
    const session = await getServerSession();

    if (!session) {
        redirect('/');

    }
    
    return (
      // <div className="flex min-h-screen flex-col items-center justify-center p-24">
      //     <h1 className="text-green-400 font-bold border p-4">
      //         Aaa gye Barkurdarr...
      //     </h1>
      // </div>

      <div className=" min-h-screen flex justify-center items-center">
        <div className="border border-slate-200 p-4 h-[300px] w-[400px] bg-slate-100 rounded flex items-center justify-center">
          <h1 className="text-3xl text-green-400 font-bold">
            Aaa gye Barkurdarr...{" "}
          </h1>
        </div>
      </div>
    );
}

export default Dashboard
