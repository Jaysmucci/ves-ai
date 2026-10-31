import "./App.css";

function App() {
  return (
    <main className="development-page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <section className="hero">
        <div className="orbital">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit orbit-c" />
          <div className="orbital-core">
            <span>VES</span>
            <strong>AI</strong>
          </div>
        </div>

        <h1>
          We're building
          <br />
          <span>something beneath.</span>
        </h1>
      </section>

      <footer className="footer">
        <span>© 2026 VES-AI. All rights reserved.</span>
        <div className="credit">
          Designed & developed by <strong>Jays Mucci</strong>
        </div>
      </footer>
    </main>
  );
}

export default App;
