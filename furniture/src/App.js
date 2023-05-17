import React,{useState,useEffect} from 'react';
// import Admin from './components/admin';

const App = ()=>{
  const [htmlFileString, setHtmlFileString] = useState(null);

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`index.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);
  return (
    // <Admin/>
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  )
}
export default App;