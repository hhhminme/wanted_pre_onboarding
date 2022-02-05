import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";

function App() {
  return (
    <main className="flex-col px-10 bg-white">
      <Toggle componentName={"Toggle"} />
      <Modal componentName={"Modal"} />
      <Tab componentName={"Tab"} />
      <Tag componentName={"Tag"} />
      <AutoComplete componentName={"AutoComplete"} />
      <ClickToEdit componentName={"ClickToEdit"} />
    </main>
  );
}

export default App;
