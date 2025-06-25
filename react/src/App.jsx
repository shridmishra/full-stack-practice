import { CharacterCounter } from "./components/CharacterCounter";
import { Counter } from "./components/Counter";
import { LoginForm } from "./components/LoginForm";
import { LoginStatus } from "./components/LoginStatus";
import { NameInput } from "./components/NameInput";
import { SignUpForm } from "./components/SignUpForm";
import { Toggle } from "./components/Toggle";
import { UserCard } from "./components/UserCard";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const books = ["1984", "Brave New World", "Sapiens"];

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth:"100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        padding: "2rem",
      }}
    >
      {/* <div>
        <WelcomeMessage />
        <UserCard name="shrid" age="21" role="admin" />
        <div>{books.map(book => <li key={book}>{book}</li>)}</div>
        <LoginStatus isLoggedIn={true} />
      </div> */}

      <div
        style={{
          backgroundColor: "black",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "400px",
          padding:"2rem",
        }}
      >
        {/* <Counter />
        <NameInput />
        <LoginForm/> */}
        {/* <Toggle/>
        <CharacterCounter/> */}
        <SignUpForm/>
      </div>
    </div>
  );
}

export default App;
