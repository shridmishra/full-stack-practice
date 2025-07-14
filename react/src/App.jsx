import { CharacterCounter } from "./components/hooks/useEffect/CharacterCounter";
import { Counter } from "./components/hooks/useEffect/Counter";
import { LoginForm } from "./components/hooks/useState/LoginForm";
import { LoginStatus } from "./components/hooks/useEffect/LoginStatus";
import { NameInput } from "./components/hooks/useEffect/NameInput";
import { SignUpForm } from "./components/hooks/useState/SignUpForm";
import { Toggle } from "./components/hooks/useState/Toggle";
import { AutoLogout } from "./components/hooks/useEffect/AutoLogout";
import { Fetch } from "./components/hooks/useEffect/Fetch";
import { SeeTime } from "./components/hooks/useEffect/SeeTime";
import { Size } from "./components/hooks/useEffect/Size";
import { UserCard } from "./components/hooks/useState/UserCard";
import WelcomeMessage from "./components/hooks/useState/WelcomeMessage";
import { BookList, SearchInput } from "./components/hooks/useRef/Filters";
import { ToggleTwo } from "./components/hooks/useRef/Toggle";
import { TabSwitch } from "./components/hooks/useRef/TabSwitch";
import { CounterWithPrevious } from "./components/hooks/useRef/input";
import { ScrollDown } from "./components/hooks/useRef/ScrollDown";
import { ControlledForm, UncontrolledLogin } from "./components/hooks/useRef/forms";
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
