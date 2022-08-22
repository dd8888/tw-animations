import clsx from "clsx";
import type { NextPage } from "next";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";

const Home: NextPage = () => {
  const [mode, setMode] = useState<"preview" | "code">("preview");
  const shakingEffect = {
    usageText: `<h1 className="hover:animate-shake">Shake</h1>`,
    tailwindConfigText: `...
theme: {
  extend: {
    animation: {
      shake: "shake 0.5s infinite",
    },
    keyframes: {
      shake: {
        "0%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        "10%": { transform: "translate(1px, 2px) rotate(-1deg)" },
        "20%": { transform: "translate(1px, 2px) rotate(0deg)" },
        "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
        "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
        "50%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
        "60%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        "70%": { transform: "translate(-3px, 2px) rotate(0deg)" },
        "80%": { transform: "translate(-1px, 2px) rotate(1deg)" },
        "90%": { transform: "translate(-3px, 1px) rotate(1deg)" },
        "100%": { transform: "translate(1px, 1px) rotate(0deg)" },
      },
    }
...`,
  };
  const glitchEffect = {
    usageText: `<h1 className="overflow-hidden hover:animate-glitch">Glitch</h1>`,
    tailwindConfigText: `...
theme: {
  extend: {
    animation: {
      glitch: "glitch 0.5s infinite alternate ease-in",
    },
    keyframes: {
      glitch: {
        "0%": {
          textShadow: "0px 0px 1px #eee, 1px 1px 1px teal, -1px -1px 1px red",
        },
        "50%": {
          textShadow: "0px 0px 3px #eee, 3px 3px 1px teal, -3px -2px 2px red",
        },
        "100%": {
          textShadow: "0px 2px 3px #eee, 2px 2px 1px teal, -1px -1px 2px red",
        },
      },
    }
`,
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-md relative grid items-center justify-between grid-cols-2  mt-2 text-center w-max ring ring-[#ff6138]">
          <div
            className={clsx(
              "w-full px-6 py-4 cursor-pointer z-10"
              // mode === "code" && "bg-[#ff6138]"
            )}
            onClick={() => setMode("code")}
          >
            Code
          </div>
          <div
            className={clsx(
              "w-full px-6 py-4 cursor-pointer z-10"
              // mode === "preview" && "bg-[#ff6138]"
            )}
            onClick={() => setMode("preview")}
          >
            Preview
          </div>
          <div
            className={clsx(
              "absolute top-0 w-1/2 h-full bg-[#ff6138] z-0 left-0 duration-500 transition-all",
              mode === "preview"
                ? "translate-x-full rounded-l-md"
                : "rounded-r-md"
            )}
          ></div>
        </div>
      </div>
      {mode === "code" && (
        <div>
          <div className="grid items-center justify-center grid-cols-3 gap-6 p-10 text-center">
            <div className="col-span-1">
              <h1 className="text-5xl hover:animate-shake">Shake</h1>
            </div>
            <div className="col-span-2">
              <div className="relative flex flex-col justify-center w-full space-y-4 text-left ">
                <span className="font-mono">Usage</span>
                <CodeBlock text={shakingEffect.usageText} lang="html" />
                <span className="font-mono">tailind.config.js</span>
                <CodeBlock
                  text={shakingEffect.tailwindConfigText}
                  lang="javascript"
                />
              </div>
            </div>
          </div>
          <div className="grid items-center justify-center grid-cols-3 gap-6 p-10 text-center">
            <div className="col-span-1">
              <h1 className="overflow-hidden text-5xl hover:animate-glitch">
                Glitch
              </h1>
            </div>
            <div className="col-span-2">
              <div className="relative flex flex-col justify-center w-full space-y-4 text-left ">
                <span className="font-mono">Usage</span>
                <CodeBlock text={glitchEffect.usageText} lang="html" />
                <span className="font-mono">tailind.config.js</span>
                <CodeBlock
                  text={glitchEffect.tailwindConfigText}
                  lang="javascript"
                />
              </div>
            </div>
          </div>
          <div className="grid items-center justify-center grid-cols-3 gap-6 p-10 text-center">
            <div className="col-span-1">
              <h1 className="text-5xl text-long-shadow-transition">
                Long shadow
              </h1>
            </div>
            <div className="col-span-2">
              <div className="relative flex flex-col justify-center w-full space-y-4 text-left ">
                <CodeBlock text={shakingEffect.usageText} lang="html" />
                <CodeBlock
                  text={shakingEffect.tailwindConfigText}
                  lang="javascript"
                />
              </div>
            </div>
          </div>
          <div className="grid items-center justify-center grid-cols-3 gap-6 p-10 text-center">
            <div className="col-span-1">
              <h1 className="text-5xl text-shadow-transition">Shadow</h1>
            </div>
            <div className="col-span-2">
              <div className="relative flex flex-col justify-center w-full space-y-4 text-left ">
                <CodeBlock text={shakingEffect.usageText} lang="html" />
                <CodeBlock
                  text={shakingEffect.tailwindConfigText}
                  lang="javascript"
                />
              </div>
            </div>
          </div>
          <div className="grid items-center justify-center grid-cols-3 gap-6 p-10 text-center">
            <div className="col-span-1">
              <h1 className="text-5xl text-highlight-transition">Highlight</h1>
            </div>
            <div className="col-span-2">
              <div className="relative flex flex-col justify-center w-full space-y-4 text-left ">
                <CodeBlock text={shakingEffect.usageText} lang="html" />
                <CodeBlock
                  text={shakingEffect.tailwindConfigText}
                  lang="javascript"
                />
              </div>
            </div>
          </div>
          <div className="grid items-center justify-center grid-cols-3 gap-6 p-10 text-center">
            <div className="col-span-1">
              {/* Note that the _ is important for arbitrary values */}
              <h1 className="text-5xl duration-500 [transform:perspective(1px)_translateZ(0)] hover:[transform:scale(1.2)] hover:ease-scale-timing">
                Bounce
              </h1>
            </div>
            <div className="col-span-2">
              <div className="relative flex flex-col justify-center w-full space-y-4 text-left ">
                <CodeBlock text={shakingEffect.usageText} lang="html" />
                <CodeBlock
                  text={shakingEffect.tailwindConfigText}
                  lang="javascript"
                />
              </div>
            </div>
          </div>
          <div className="grid items-center justify-center grid-cols-3 gap-6 p-10 text-center">
            <div className="col-span-1">
              {/* Note that the _ is important for arbitrary values */}
              <h1 className="text-5xl duration-500 [transform:perspective(1px)_translateZ(0)] hover:[transform:scale(0.8)] hover:ease-scale-timing">
                Bounce 2
              </h1>
            </div>
            <div className="col-span-2">
              <div className="relative flex flex-col justify-center w-full space-y-4 text-left ">
                <CodeBlock text={shakingEffect.usageText} lang="html" />
                <CodeBlock
                  text={shakingEffect.tailwindConfigText}
                  lang="javascript"
                />
              </div>
            </div>
          </div>
          <div className="grid items-center justify-center grid-cols-3 gap-6 p-10 text-center">
            <div className="col-span-1 group">
              <div className="group-hover:[&_h1]:animate-wave ">
                <h1
                  data-order="1"
                  className="inline-block text-5xl"
                  // @ts-ignore
                  style={{ "--index": 1 }}
                >
                  w
                </h1>
                <h1
                  data-order="2"
                  className="inline-block text-5xl"
                  // @ts-ignore
                  style={{ "--index": 2 }}
                >
                  a
                </h1>
                <h1
                  data-order="3"
                  className="inline-block text-5xl"
                  // @ts-ignore
                  style={{ "--index": 3 }}
                >
                  v
                </h1>
                <h1
                  data-order="4"
                  className="inline-block text-5xl"
                  // @ts-ignore
                  style={{ "--index": 4 }}
                >
                  e
                </h1>
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative flex flex-col justify-center w-full space-y-4 text-left ">
                <CodeBlock text={shakingEffect.usageText} lang="html" />
                <CodeBlock
                  text={shakingEffect.tailwindConfigText}
                  lang="javascript"
                />
              </div>
            </div>
          </div>
          <div className="grid items-center justify-center grid-cols-3 gap-6 p-10 text-center">
            <div className="col-span-1">
              <div className="relative flex justify-center">
                <h1 className="text-5xl [-webkit-text-stroke:2px_#ff6138] text-transparent absolute -translate-y-1/2">
                  wave 2
                </h1>
                <h1 className="absolute text-5xl -translate-y-1/2 text-[#ff6138] animate-wave2">
                  wave 2
                </h1>
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative flex flex-col justify-center w-full space-y-4 text-left ">
                <CodeBlock text={shakingEffect.usageText} lang="html" />
                <CodeBlock
                  text={shakingEffect.tailwindConfigText}
                  lang="javascript"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {mode === "preview" && (
        <div className="grid items-center justify-center h-screen grid-cols-3 grid-rows-3 gap-6 p-10 text-center">
          <h1 className="text-5xl hover:animate-shake">Shake</h1>
          <h1 className="overflow-hidden text-5xl hover:animate-glitch">
            Glitch
          </h1>
          <h1 className="text-5xl text-long-shadow-transition">Long shadow</h1>
          <h1 className="text-5xl text-shadow-transition">Shadow</h1>
          <h1 className="text-5xl text-highlight-transition">Highlight</h1>
          <h1 className="text-5xl duration-500 [transform:perspective(1px)_translateZ(0)] hover:[transform:scale(1.2)] hover:ease-scale-timing">
            Bounce
          </h1>
          <h1 className="text-5xl duration-500 [transform:perspective(1px)_translateZ(0)] hover:[transform:scale(0.8)] hover:ease-scale-timing">
            Bounce 2
          </h1>
          <div className="group">
            <div className="group-hover:[&_h1]:animate-wave ">
              <h1
                data-order="1"
                className="inline-block text-5xl"
                // @ts-ignore
                style={{ "--index": 1 }}
              >
                w
              </h1>
              <h1
                data-order="2"
                className="inline-block text-5xl"
                // @ts-ignore
                style={{ "--index": 2 }}
              >
                a
              </h1>
              <h1
                data-order="3"
                className="inline-block text-5xl"
                // @ts-ignore
                style={{ "--index": 3 }}
              >
                v
              </h1>
              <h1
                data-order="4"
                className="inline-block text-5xl"
                // @ts-ignore
                style={{ "--index": 4 }}
              >
                e
              </h1>
            </div>
          </div>
          <div className="relative flex justify-center">
            <h1 className="text-5xl [-webkit-text-stroke:2px_#ff6138] text-transparent absolute -translate-y-1/2">
              wave 2
            </h1>
            <h1 className="absolute text-5xl -translate-y-1/2 text-[#ff6138] animate-wave2">
              wave 2
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
