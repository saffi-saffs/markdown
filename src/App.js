
import { useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
  const [change, setChange] = useState(`
  # H1
## H2
[title](https://www.google.com)
\`code\`
\`\`\`
{
  "name":"june"

}
\`\`\`

> Block Quotes!


_single underscores_

**double asterisks**

__double underscores__


- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
        - That look like this.
**bold **
![alt text](image.jpg)


`);
  marked.setOptions({
    breaks:true
  })
  const previewChange = (e) => { 
setChange(e.target.value)
  }

  return (
    <div className="App">
      <label for="editor" >Editor</label>
      <textarea id="editor" onChange={(e) => { previewChange(e) }}
        value={change}></textarea>
      <label>previewer</label>
      
      <div id="preview"
        dangerouslySetInnerHTML={{
          __html:marked(change),
        }}
      ></div>

    </div>
  );
}

export default App;
