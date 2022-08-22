/* eslint-disable @next/next/no-img-element */
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 as style } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import clsx from "clsx";

export const CodeBlock: React.FC<{
  lang: string;
  text: string;
}> = ({ lang, text }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative flex flex-col">
      <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
        {/* <div className="absolute flex items-center justify-center bg-white rounded-full cursor-pointer w-7 h-7 group top-1 right-2">
          <img
            src="/icons/copy-icon.png"
            alt="copy code"
            className="object-fill transition-transform duration-75 group-hover:scale-110"
            height="15px"
            width="15px"
          />
        </div> */}
        <button
          className={clsx(
            "absolute px-2 py-[1px] font-sans text-sm border rounded-md  w-min top-2 right-2",
            copied
              ? "bg-green-500 border-green-400"
              : "bg-slate-600 border-slate-500"
          )}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={lang} style={style}>
        {text}
      </SyntaxHighlighter>
    </div>
  );
};
