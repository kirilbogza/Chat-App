import { useState } from "react";

type LayoutProps = {
  connectionStatus: string;
  messages: string[];
};

function Layout({ connectionStatus, messages }: LayoutProps) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [buttonUnactive, setButtonActive] = useState("");

  function openSidebar() {
    setSideBarOpen((prev) => !prev);
    setButtonActive((prev) => !prev);
  }

  return (
    <>
      <header>
        <div
          className="sidebar"
          style={{
            width: isSideBarOpen ? "300px" : "130px",
            justifyContent: isSideBarOpen ? "flex-end" : "center",
          }}
        >
          {/* <p>{connectionStatus}</p> */}

          <button onClick={openSidebar}>
            {buttonUnactive ? "→ ←" : "← →"}
          </button>
        </div>
      </header>
      <main className="app">
        <div className="message">
          {messages.map((message) => (
            <p>{message}</p>
          ))}
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default Layout;
