import { CharacterCounter } from "./components/useEffect/CharacterCounter";
import { Counter } from "./components/useEffect/Counter";
import { LoginForm } from "./components/useState/LoginForm";
import { LoginStatus } from "./components/useEffect/LoginStatus";
import { NameInput } from "./components/useEffect/NameInput";
import { SignUpForm } from "./components/useState/SignUpForm";
import { Toggle } from "./components/useState/Toggle";
import { AutoLogout } from "./components/useEffect/AutoLogout";
import { Fetch } from "./components/useEffect/Fetch";
import { SeeTime } from "./components/useEffect/SeeTime";
import { Size } from "./components/useEffect/Size";
import { UserCard } from "./components/useState/UserCard";
import WelcomeMessage from "./components/useState/WelcomeMessage";
import { BookList, SearchInput } from "./components/useRef/Filters";
import { ToggleTwo } from "./components/useRef/Toggle";
import { TabSwitch } from "./components/useRef/TabSwitch";
import { CounterWithPrevious } from "./components/useRef/input";
import { ScrollDown } from "./components/useRef/ScrollDown";
import { ControlledForm, UncontrolledLogin } from "./components/useRef/forms";
import { TodoReducer } from "./components/todoReducer";

function App() {
  // const books = [
  //   "1984",
  //   "Brave New World",
  //   "Sapiens",
  //   "The Great Gatsby",
  //   "Thinking, Fast and Slow",
  // ];

  // const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        padding: "2rem",
      }}
    >
      <div>
        {/* <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <BookList books={books} searchQuery={searchQuery} /> */}
        {/* <ToggleTwo/>
      <TabSwitch/>
      <AutoFocusInput/>
      <ScrollDown/> */}
        {/* <CounterWithPrevious/> */}
      </div>
      
      {/* <div>
        <UncontrolledLogin />
        <ControlledForm />
      </div> */}

      <TodoReducer/>
    </div>
  );
}

export default App;

//  <div
//         style={{
//           backgroundColor: "black",
//           borderRadius: "8px",
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//           display: "flex",
//           flexDirection: "column",
//           gap: "1.5rem",
//           width: "100%",
//           maxWidth: "400px",
//           padding: "2rem",
//         }}
//       >
//         {/* <Counter />
//         <NameInput />
//         <LoginForm />
//         <Toggle />
//         <CharacterCounter />
//         <SignUpForm />
//         <Fetch />
//         <SeeTime />
//         <Size />
//         <AutoLogout /> */}

//       </div>
