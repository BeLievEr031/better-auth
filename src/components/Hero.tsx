import { CodeBlock } from './CodeBlock';
import { TbProgressBolt } from "react-icons/tb";
import { Spotlight } from './ui/Spotlight';
function Hero() {
    return (
        <section className="max-h-[40rem] relative w-full flex md:items-center md:justify-center antialiased bg-grid-pattern-white bg-background overflow-hidden px-8 md:min-h-[40rem]">
            <Spotlight />
            <div className="overflow-hidden bg-transparent md:px-10 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
                <div className="lg:max-w-8xl mx-auto grid max-w-full grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-2 lg:grid-cols-2 lg:px-8 lg:py-4 xl:gap-x-16 xl:px-12">
                    <div className="relative z-10 md:text-center lg:text-left">
                        <div className="relative">
                            <div className="flex flex-col items-start gap-2">
                                <div className="flex items-end gap-1 mt-2 ">
                                    <div className="flex items-center gap-1">
                                        <TbProgressBolt color='white' size={12} className='mt-0.5' />
                                        <span className="text-xs text-opacity-75 text-foreground">Own Your Auth</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-zinc-800 dark:text-zinc-300 mt-3 tracking-tight text-2xl md:text-3xl">
                                The most comprehensive authentication framework for TypeScript.
                            </p>
                            <div className="relative mt-2 md:flex items-center gap-2 w-10/12 hidden border border-white/5">
                                <div className="relative flex content-center transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-full">
                                    <div className="z-10 px-4 py-2 rounded-none w-full flex items-center justify-between">
                                        <div className="w-full flex items-center gap-2">
                                            <p className="md:text-sm text-xs font-mono select-none">
                                                <span>
                                                    <span className="text-[#4498c8]">git:</span>
                                                    <span className="text-[#F07178]">(main) </span>
                                                </span>
                                                <span className="italic text-amber-600"> x</span>
                                            </p>
                                            <p className=" relative inline tracking-tight opacity-90 md:text-sm text-xs dark:text-white font-mono text-black">
                                                npm add{/* */}{" "}
                                                <span className="relative dark:text-fuchsia-100 text-fuchsia-950">
                                                    better-auth
                                                    <span className="absolute h-2 bg-gradient-to-tr from-white via-stone-200 to-stone-300 blur-3xl w-full top-0 left-2" />
                                                </span>
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <a
                                                target="_blank"
                                                href="https://www.npmjs.com/package/better-auth"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 128 128"
                                                >
                                                    <path
                                                        fill="#cb3837"
                                                        d="M0 7.062C0 3.225 3.225 0 7.062 0h113.88c3.838 0 7.063 3.225 7.063 7.062v113.88c0 3.838-3.225 7.063-7.063 7.063H7.062c-3.837 0-7.062-3.225-7.062-7.063zm23.69 97.518h40.395l.05-58.532h19.494l-.05 58.581h19.543l.05-78.075l-78.075-.1l-.1 78.126z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M25.105 65.52V26.512H40.96c8.72 0 26.274.034 39.008.075l23.153.075v77.866H83.645v-58.54H64.057v58.54H25.105z"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                target="_blank"
                                                href="https://github.com/better-auth/better-auth"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 256 256"
                                                >
                                                    <g fill="none">
                                                        <rect width={256} height={256} fill="#242938" rx={60} />
                                                        <path
                                                            fill="#fff"
                                                            d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex-none inset-0 overflow-hidden absolute z-0 rounded-none bg-gradient-to-tl dark:from-amber-100/30 dark:via-zinc-900 dark:to-black blur-md opacity-50" />
                                    <div className="bg-zinc-100 dark:bg-zinc-950 absolute z-1 flex-none inset-[2px] " />
                                </div>
                            </div>
                            <div className="mt-4 flex w-fit flex-col gap-4 font-sans md:flex-row md:justify-center lg:justify-start items-center">
                                <a
                                    className="hover:shadow-sm dark:border-stone-100 dark:hover:shadow-sm border-2 border-black bg-white px-4 py-1.5 text-sm uppercase text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 md:px-8 dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
                                    href="/docs"
                                >
                                    Get Started
                                </a>
                                <button
                                    className="bg-stone-950 no-underline group cursor-pointer relative  p-px text-xs font-semibold leading-6  text-white md:inline-block hidden"
                                    type="button"
                                    aria-haspopup="dialog"
                                    aria-expanded="false"
                                    aria-controls="radix-«Ra69ht9lb»"
                                    data-state="closed"
                                    data-slot="dialog-trigger"
                                >
                                    <span className="absolute inset-0 overflow-hidden rounded-sm">
                                        <span className="absolute inset-0 rounded-sm bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    </span>
                                    <div className="relative flex space-x-2 items-center z-10 rounded-none bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-plus"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5v14" />
                                        </svg>
                                        <span>Create Sign in Box</span>
                                    </div>
                                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-stone-800/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                                </button>
                            </div>
                            <div className="mt-4 md:w-40 w-32">
                                <a
                                    href="https://www.ycombinator.com/launches/NUm-better-auth-the-authentication-framework-for-typescript"
                                    target="_blank"
                                >
                                    <img
                                        src="https://www.ycombinator.com/launches/NUm-better-auth-the-authentication-framework-for-typescript/upvote_embed.svg"
                                        alt="Launch YC: Better Auth - The Authentication Framework for TypeScript"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative hidden md:block lg:static xl:pl-10">
                        <div className="relative">
                            <div className="from-sky-300 via-sky-300/70 to-blue-300 absolute inset-0 rounded-none bg-gradient-to-tr opacity-5 blur-lg" />
                            <div className="from-stone-300 via-stone-300/70 to-blue-300 absolute inset-0 rounded-none bg-gradient-to-tr opacity-5" />
                            <div
                                className="from-stone-100 to-stone-200 dark:to-black/90 dark:via-stone-950/10 dark:from-stone-950/90 relative overflow-hidden rounded-sm bg-gradient-to-tr ring-1 ring-white/10 backdrop-blur-lg"
                                style={{ height: "399.6px" }}
                            >
                                <div>
                                    <div className="absolute -top-px left-0 right-0 h-px" />
                                    <div className="absolute -bottom-px left-11 right-20 h-px" />
                                    <div className="pl-4 pt-4">
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 42 10"
                                            fill="none"
                                            className="stroke-slate-500/30 h-2.5 w-auto"
                                        >
                                            <circle cx={5} cy={5} r="4.5" />
                                            <circle cx={21} cy={5} r="4.5" />
                                            <circle cx={37} cy={5} r="4.5" />
                                        </svg>
                                        <div className="mt-4 flex space-x-2 text-xs">
                                            <button className="relative isolate flex h-6 cursor-pointer items-center justify-center rounded-full px-2.5 text-stone-300">
                                                auth.ts
                                                <div
                                                    className="bg-stone-800 absolute inset-0 -z-10 rounded-full"
                                                    style={{ opacity: 1 }}
                                                />
                                            </button>
                                            <button className="relative isolate flex h-6 cursor-pointer items-center justify-center rounded-full px-2.5 text-slate-500">
                                                client.ts
                                            </button>
                                        </div>
                                        <div className="mt-6 flex flex-col items-start px-1 text-sm">
                                            <div className="absolute top-2 right-4">
                                                <button
                                                    data-slot="button"
                                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-input shadow-xs hover:bg-accent hover:text-accent-foreground size-9 absolute w-5 border-none bg-transparent h-5 top-2 right-0"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-copy h-3 w-3"
                                                    >
                                                        <rect
                                                            width={14}
                                                            height={14}
                                                            x={8}
                                                            y={8}
                                                            rx={2}
                                                            ry={2}
                                                        />
                                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                                    </svg>
                                                    <span className="sr-only">Copy code</span>
                                                </button>
                                            </div>
                                            <div>
                                                <CodeBlock />;
                                            </div>
                                            <div className="self-end">
                                                <a
                                                    target="_blank"
                                                    className="shadow-md  border shadow-primary-foreground mb-4 ml-auto mr-4 mt-auto flex cursor-pointer items-center gap-2 px-3 py-1 transition-all ease-in-out hover:opacity-70"
                                                    href="https://demo.better-auth.com"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2z"
                                                        />
                                                    </svg>
                                                    <p className="text-sm">Demo</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>

    )
}

export default Hero;