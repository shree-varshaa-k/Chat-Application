import Chat from "./components/chat/Chat";
import Deatil from "./components/detail/Deatil";
import List from "./components/list/List";

const App = () => {
  return (
    <div className="container">
      <List />
      <Chat />
      <Deatil />
    </div>
  );
};

export default App;
