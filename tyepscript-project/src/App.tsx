import { useState } from "react";
import "./App.css";

function App():JSX.Element {
  const [item, setItem] = useState<string>("");
  const [todoItems, setTodoItems] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (item.trim()) {
      setTodoItems([...todoItems, item]);
      setItem("");
    }
  };

  return (
    <div className="bg-slate-500 h-screen w-screen">
      <h1 className="mx-5 text-center text-4xl font-bold text-white pt-6">
        ToDo List
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="items-center flex mt-8 justify-center">
          <input
            type="text"
            value={item}
            placeholder="Enter the item..."
            className="w-[20%] py-3 px-7 rounded-full outline-none"
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            type="submit"
            className="w-[5%] px-5 py-3 rounded-full bg-green-400 text-white font-bold"
          >
            Add
          </button>
        </div>
      </form>
      <div className="flex justify-center items-center mt-8">
        <ul className="flex">
          {todoItems.map((todoItem, index) => (
            <div className="flex gap-2 font-bold text-white text-2xl">
              <span>{index + 1}</span>
              <li key={index} className="font-bold text-white text-2xl">
                {todoItem}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
