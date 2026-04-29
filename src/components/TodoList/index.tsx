import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const todos = [
  { id: 1, text: "Todo 1" },
  { id: 2, text: "Todo 2" },
  { id: 3, text: "Todo 3" },
];

const TodoList = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {todos.map((todo) => (
            <li
              className={`${themeConfig[theme].todo.borderColor} p-6 border-b`}
              key={todo.id}
            >
              <div className="flex items-center gap-4">
                <button
                  className={`${themeConfig[theme].todo.borderColor} w-6 h-6 border rounded-full cursor-pointer`}
                ></button>
                <p className={`${themeConfig[theme].todo.textColor} text-lg`}>
                  {todo.text}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div
          className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}
        >
          <p>{todos.length} items total</p>

          <div className="hidden sm:flex gap-4">
            <button className="text-bright-blue">All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>

          <button>Clear Completed</button>
        </div>
      </div>

      <div className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].todo.textColor} flex justify-center gap-5 py-4 rounded-md mt-4 sm:hidden`}>
        <button className="text-bright-blue">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </>
  );
};

export default TodoList;
