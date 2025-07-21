import { marked } from "marked";
import DOMPurify from "dompurify";
import "./Preview.css";

const Preview = ({ markdown }) => {
    const createMarkup = () => {
        const html = marked.parse(markdown, { breaks: true });
        return { __html: DOMPurify.sanitize(html) };
    };

    return (
        <div
          id="preview"
          role="region"
          aria-label="Markdown preview"
          dangerouslySetInnerHTML={createMarkup()}
        />
    );
};

export default Preview;