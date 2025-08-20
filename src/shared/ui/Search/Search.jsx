export const Search = ({ getInputValue }) => {
  const handelInputChange = (e) => {
    getInputValue(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <input
        onChange={handelInputChange}
        type="text"
        className="w-80 pl-3 pr-3 py-2 mb-8 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Find your pokemon"
      />
    </div>
  );
};
