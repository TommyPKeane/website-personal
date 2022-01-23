import React from "react";
import PropTypes from "prop-types";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("py", python);

// CSS / SCSS
import "highlight.js/scss/github-dark.scss";
import "../../assets/scss/articles/codeblock.scss";


export default function CodeBlock(props,) {
  const highlightedCode = (
    props.lang
      ? hljs.highlight(props.lang, props.code)
      : hljs.highlightAuto(props.code)
  );
  return (
    <pre className="hljs">
      <code className="hljs" dangerouslySetInnerHTML={ { "__html": highlightedCode.value, } }>
      </code>
    </pre>
  );
}

CodeBlock.propTypes = {
  lang: PropTypes.string,
  code: PropTypes.string,
};

CodeBlock.defaultProps = {
  lang: "js",
  code: "let x = 3;",
};
