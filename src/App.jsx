import './App.css';
import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

const initialMarkdown = `# Hello Markdown!
  ## Sub-heading
  [Link](https://example.com)
  \`inline code\`

  \`\`\`
  code block
  \`\`\`

  - List item
  > Blockquote

  **Bold**

  ![Image](https://placekitten.com/100/100)
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => setMarkdown(e.target.value);

  return (
    <div className='App'>
      <Editor markdown={markdown} onChange={handleChange} />
      <Preview markdown={markdown} />
    </div>
  )
}

export default App;
