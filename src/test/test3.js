import { useState } from "react";

export default function Accordion() {
    const [visible, setIsVisible] = useState({
        html: false,
        css: false,
        javascript: false
    });

    const toggleExpand = (section) => {
      setIsVisible((prev) => ({
        ...prev,
        [section]: !prev[section]
      }));
    }

    return (
      <div style={{width: "500px", display: "flex", flexDirection: "column", gap: "30px", margin: "50px auto", marginTop: "50px"}}>
        <div>
          <div onClick={() => toggleExpand('html')}>
            HTML
            {visible.html ? "collapse" : "expand"}
            <span
              aria-hidden={true}
              className="accordion-icon"
            />
          </div>
          {visible.html && <div>
            The HyperText Markup Language or HTML is the
            standard markup language for documents designed to
            be displayed in a web browser.
          </div>}
        </div>
        <div onClick={() => toggleExpand('css')}>
          <div>
            CSS
            {visible.css ? "collapse" : "expand"}
            <span
              aria-hidden={true}
              className="accordion-icon"
            />
          </div>
          {visible.css && <div>
            Cascading Style Sheets is a style sheet language
            used for describing the presentation of a document
            written in a markup language such as HTML or XML.
          </div>}
        </div>
        <div onClick={() => toggleExpand('javascript')}>
          <div>
            JavaScript
            {visible.javascript ? "collapse" : "expand"}
            <span
              aria-hidden={true}
              className="accordion-icon"
            />
          </div>
          {visible.javascript &&<div>
            JavaScript, often abbreviated as JS, is a
            programming language that is one of the core
            technologies of the World Wide Web, alongside HTML
            and CSS.
          </div>}
        </div>
      </div>
    );
  }
  