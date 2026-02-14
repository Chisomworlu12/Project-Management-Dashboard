export default function Header({totalProject}: {totalProject: number}) {
  return (
    <header className=" text-black bg-white p-4 flex items-center ">
      <h1 className="text-2xl font-bold">Project Dashboard</h1>
      <p className="ml-3 text-[11px] rounded-2xl text-gray-600 bg-gray-300/40 py-1 px-2">{totalProject} Total Projects</p>
    </header>
  );
}