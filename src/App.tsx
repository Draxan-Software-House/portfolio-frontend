import Layout from "./components/Layout";

const Comp = (<h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>);

function App() {
  return (
    <Layout >
      {Comp}
    </Layout>
  );
}

export default App;