export interface App {
  sum: (a: number, b: number) => number;
}

const App: App = {
  sum: (a, b) => a + b
}

export default App;