import "./Editor.css";

const Editor = ({ markdown, onChange }) => {
    return (
        <textarea
            id="editor"
            value={markdown}
            onChange={onChange}
        />
    );
}

export default Editor;