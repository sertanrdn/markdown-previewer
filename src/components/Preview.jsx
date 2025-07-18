import { marked } from "marked";
import DOMPurify from "dompurify";

const Preview = ({ markdown }) => {
    const createMarkup = () => {
        const html = marked.parse(markdown, { breaks: true });
        return { __html: DOMPurify.sanitize(html) };
    };

    return (
        <div
          id="preview"
          dangerouslySetInnerHTML={createMarkup()}
        />
    );
};

export default Preview