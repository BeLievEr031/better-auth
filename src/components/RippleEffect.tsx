
function RippleEffect() {
    return (
        <div className="relative col-span-3 border-l-[1.2px] border-l-border md:border-b-[1.2px] dark:border-b-0  h-full py-20">
            <div className="w-full h-full p-16 pt-10 md:px-10">
                <div className="flex flex-col items-center justify-center w-full h-full gap-3">
                    <div className="flex items-center gap-2">
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
                            className="lucide lucide-earth w-4 h-4"
                        >
                            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                            <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                            <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                            <circle cx={12} cy={12} r={10} />
                        </svg>
                        <p className="text-gray-600 dark:text-gray-400">Own your auth</p>
                    </div>
                    <p className="max-w-md mx-auto mt-4 text-4xl font-normal tracking-tighter text-center md:text-4xl">
                        <strong>Roll your own auth with confidence in minutes!</strong>
                    </p>
                    <div className="flex mt-[10px] z-20 justify-center items-start">
                        <div className="flex gap-7 flex-wrap mt-3 justify-center items-center max-w-4xl">
                            <span
                                className="transform duration-300 hover:rotate-12 transition-transform"
                                data-state="closed"
                                data-slot="tooltip-trigger"
                            >
                                <svg
                                    className="w-10 h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.2em"
                                    height="1.2em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"
                                    />
                                </svg>
                            </span>
                            <span
                                className="transform duration-300 hover:rotate-12 transition-transform"
                                data-state="closed"
                                data-slot="tooltip-trigger"
                            >
                                <svg
                                    className="w-10 h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.2em"
                                    height="1.2em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M13.464 19.83h8.922c.283 0 .562-.073.807-.21a1.6 1.6 0 0 0 .591-.574a1.53 1.53 0 0 0 .216-.783a1.53 1.53 0 0 0-.217-.782L17.792 7.414a1.6 1.6 0 0 0-.591-.573a1.65 1.65 0 0 0-.807-.21c-.283 0-.562.073-.807.21a1.6 1.6 0 0 0-.59.573L13.463 9.99L10.47 4.953a1.6 1.6 0 0 0-.591-.573a1.65 1.65 0 0 0-.807-.21c-.284 0-.562.073-.807.21a1.6 1.6 0 0 0-.591.573L.216 17.481a1.53 1.53 0 0 0-.217.782c0 .275.074.545.216.783a1.6 1.6 0 0 0 .59.574c.246.137.525.21.808.21h5.6c2.22 0 3.856-.946 4.982-2.79l2.733-4.593l1.464-2.457l4.395 7.382h-5.859Zm-6.341-2.46l-3.908-.002l5.858-9.842l2.923 4.921l-1.957 3.29c-.748 1.196-1.597 1.632-2.916 1.632c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.67 5.67 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.6 11.6 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.5 15.5 0 0 0 1.875-7.41a15.6 15.6 0 0 0-.734-4.735Zm0 0"
                                    />
                                </svg>
                            </span>
                            <span
                                className="transform duration-300 hover:rotate-12 transition-transform"
                                data-state="closed"
                                data-slot="tooltip-trigger"
                            >
                                <svg
                                    className="w-10 h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.2em"
                                    height="1.2em"
                                    viewBox="0 0 426 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M403.508 229.23C491.235 87.7 315.378-58.105 190.392 23.555L71.528 99.337c-57.559 37.487-82.55 109.513-47.45 183.53c-87.761 133.132 83.005 289.03 213.116 205.762l118.864-75.782c64.673-42.583 79.512-116.018 47.45-183.616m-297.592-80.886l118.69-75.739c77.973-46.679 167.756 34.942 135.388 110.992c-19.225-15.274-40.65-24.665-56.923-28.894c6.186-24.57-22.335-42.796-42.174-30.106l-118.95 75.48c-29.411 20.328 1.946 62.138 31.014 44.596l45.33-28.895c101.725-57.403 198 80.425 103.38 147.975l-118.692 75.739C131.455 485.225 34.11 411.96 67.592 328.5c17.786 13.463 36.677 23.363 56.923 28.894c-4.47 28.222 24.006 41.943 42.476 30.365L285.64 312.02c29.28-21.955-2.149-61.692-30.97-44.595l-45.504 28.894c-100.56 58.77-199.076-80.42-103.25-147.975"
                                    />
                                </svg>
                            </span>
                            <span
                                className="transform duration-300 hover:rotate-12 transition-transform"
                                data-state="closed"
                                data-slot="tooltip-trigger"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10"
                                    width="1.2em"
                                    height="1.2em"
                                    viewBox="0 0 128 128"
                                >
                                    <path
                                        className="fill-foreground"
                                        d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90 90 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.1 90.1 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8 8 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a8 8 0 0 1 3.242 2.402Zm2.59 80.61c-3.57 3.054-10.696 5.136-18.903 5.136c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.67 5.67 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.6 11.6 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.5 15.5 0 0 0 1.875-7.41a15.6 15.6 0 0 0-.734-4.735Zm0 0"
                                    />
                                </svg>
                            </span>
                            <span
                                className="transform duration-300 hover:rotate-12 transition-transform"
                                data-state="closed"
                                data-slot="tooltip-trigger"
                            >
                                <svg
                                    className="w-10 h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.2em"
                                    height="1.2em"
                                    viewBox="0 0 128 128"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M61.832 4.744c-3.205.058-6.37.395-9.45 1.07l-2.402.803c-4.806 1.603-8.813 4.005-11.216 7.21l-1.602 2.404l-12.017 20.828l.166.031c-4.785 5.823-5.007 14.07-.166 21.6c1.804 2.345 4.073 4.431 6.634 6.234l-15.445 4.982L.311 97.946s42.46 32.044 75.306 24.033l2.403-.801c5.322-1.565 9.292-4.48 11.683-8.068l.334.056l16.022-28.84c3.204-5.608 2.404-12.016-1.602-18.425a36 36 0 0 0-7.059-6.643l15.872-5.375l14.42-24.033S92.817 4.19 61.831 4.744z"
                                    />
                                </svg>
                            </span>
                            <span
                                className="transform duration-300 hover:rotate-12 transition-transform"
                                data-state="closed"
                                data-slot="tooltip-trigger"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.2em"
                                    height="1.2em"
                                    viewBox="0 0 32 32"
                                    className="w-10 h-10"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M24.292 15.547a3.93 3.93 0 0 0 4.115-3.145a2.57 2.57 0 0 0-2.161-1.177c-2.272-.052-3.491 2.651-1.953 4.323zm-9.177-10.85l5.359-3.104L18.766.63l-7.391 4.281l.589.328l1.119.629l2.032-1.176zm6.046-3.39c.089.027.161.1.188.188l2.484 7.593a.285.285 0 0 1-.125.344a5.06 5.06 0 0 0-2.317 5.693a5.066 5.066 0 0 0 5.401 3.703a.3.3 0 0 1 .307.203l2.563 7.803a.3.3 0 0 1-.125.344l-7.859 4.771a.3.3 0 0 1-.131.036a.26.26 0 0 1-.203-.041l-2.765-1.797a.3.3 0 0 1-.109-.129l-5.396-12.896l-8.219 4.875c-.016.011-.037.021-.052.032a.3.3 0 0 1-.261-.021l-1.859-1.093a.283.283 0 0 1-.115-.381l7.953-15.749a.27.27 0 0 1 .135-.131L18.615.045a.29.29 0 0 1 .292-.005zm-8.322 5.1l-1.932-1.089l-7.693 15.229l1.396.823l6.631-9.015a.28.28 0 0 1 .271-.12a.29.29 0 0 1 .235.177l7.228 17.296l1.933 1.251l-8.063-24.552zm13.406 10.557c-2.256 0-3.787-2.292-2.923-4.376c.86-2.083 3.563-2.619 5.156-1.025c.595.593.928 1.396.928 2.235a3.16 3.16 0 0 1-3.161 3.167z"
                                    />
                                </svg>
                            </span>
                            <span
                                className="transform duration-300 hover:rotate-12 transition-transform"
                                data-state="closed"
                                data-slot="tooltip-trigger"
                            >
                                <svg
                                    className="w-10 h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.2em"
                                    height="1.2em"
                                    viewBox="0 0 100 100"
                                >
                                    <mask
                                        id="a"
                                        style={{ maskType: "alpha" }}
                                        maskUnits="userSpaceOnUse"
                                        x={0}
                                        y={0}
                                        width={100}
                                        height={100}
                                    >
                                        <circle cx={50} cy={50} r={50} className="fill-foreground" />
                                    </mask>
                                    <g mask="url(#a)">
                                        <circle
                                            cx={11}
                                            cy={119}
                                            r={52}
                                            className="fill-muted-foreground stroke-foreground"
                                            strokeWidth={4}
                                        />
                                        <circle
                                            cx={10}
                                            cy={125}
                                            r={52}
                                            className="fill-muted-foreground stroke-foreground"
                                            strokeWidth={4}
                                        />
                                        <circle
                                            cx={9}
                                            cy={131}
                                            r={52}
                                            className="fill-muted-foreground stroke-muted-foreground"
                                            strokeWidth={4}
                                        />
                                        <circle
                                            cx={88}
                                            cy={119}
                                            r={52}
                                            className="fill-muted-foreground stroke-foreground"
                                            strokeWidth={4}
                                        />
                                        <path
                                            className="fill-foreground"
                                            d="M89 35h2v5h-2zM83 34l2 1-1 4h-2zM77 31l2 1-3 4-2-1zM73 27l1 1-3 4-1-2zM70 23l1 1-4 3-1-2zM68 18v2l-4 1-1-2zM68 11l1 2-5 1-1-2zM69 6v2h-5V6z"
                                        />
                                        <circle
                                            cx={89}
                                            cy={125}
                                            r={52}
                                            className="fill-muted-foreground stroke-foreground"
                                            strokeWidth={4}
                                        />
                                        <circle
                                            cx={90}
                                            cy={131}
                                            r={52}
                                            className="fill-muted-foreground stroke-muted-foreground"
                                            strokeWidth={4}
                                        />
                                        <ellipse
                                            cx="49.5"
                                            cy={119}
                                            rx="41.5"
                                            ry={51}
                                            className="fill-muted-foreground"
                                        />
                                        <path
                                            d="M34 38v-9c1 1 2 4 5 6l7 30-8 2c-1-23-2-23-4-29Z"
                                            className="fill-foreground stroke-muted-foreground"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M95 123c0 31-20 57-45 57S5 154 5 123c0-27 14-50 33-56l12-2c25 0 45 26 45 58Zm-45 47c22 0 39-22 39-50S72 70 50 70s-39 22-39 50 17 50 39 50Z"
                                            className="fill-foreground"
                                        />
                                        <path
                                            d="M34 29c-4-8-11-5-14-4 2 3 5 4 9 4h5Z"
                                            className="fill-foreground stroke-muted-foreground"
                                        />
                                        <path
                                            d="M25 38c-1 6 0 14 2 18 5-7 7-13 7-18v-9c-5 1-7 5-9 9Z"
                                            className="fill-muted-foreground"
                                        />
                                        <path
                                            d="M34 29c-1 3-5 11-5 16m5-16c-5 1-7 5-9 9-1 6 0 14 2 18 5-7 7-13 7-18v-9Z"
                                            className="stroke-muted-foreground"
                                        />
                                        <path
                                            d="M44 18c-10 1-11 7-10 11l4-3c5-4 6-7 6-8Z"
                                            className="fill-foreground stroke-muted-foreground"
                                        />
                                        <path
                                            d="M34 29h7l18 4c-3-6-9-14-21-7l-4 3Z"
                                            className="fill-foreground"
                                        />
                                        <path
                                            d="M34 29c4-2 12-5 18-1m-18 1h7l18 4c-3-6-9-14-21-7l-4 3Z"
                                            className="stroke-muted-foreground"
                                        />
                                        <path
                                            d="M32 29a1189 1189 0 0 1-16 19c0-17 7-18 13-19h5a14 14 0 0 1-2 0Z"
                                            className="fill-foreground"
                                        />
                                        <path
                                            d="M34 29c-5 1-7 5-9 9l-9 10c0-17 7-18 13-19h5Zm0 0c-5 2-11 3-14 10"
                                            className="stroke-muted-foreground"
                                        />
                                        <path
                                            d="M41 29c9 2 13 10 15 14a25 25 0 0 1-22-14h7Z"
                                            className="fill-foreground"
                                        />
                                        <path
                                            d="M34 29c3 1 11 5 15 9m-15-9h7c9 2 13 10 15 14a25 25 0 0 1-22-14Z"
                                            className="stroke-muted-foreground"
                                        />
                                        <circle
                                            cx="91.5"
                                            cy="12.5"
                                            r="18.5"
                                            className="fill-foreground stroke-muted-foreground"
                                            strokeWidth={2}
                                        />
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/better-auth/better-auth"
                            className="flex mt-4 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground rounded-none h-10 p-5 ml-auto z-50 overflow-hidden items-center text-sm font-medium focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 bg-transparent dark:text-white text-black px-4 py-2 max-w-[14.8rem] whitespace-pre md:flex group relative w-full justify-center gap-2 transition-all duration-300 ease-out  hover:ring-black"
                        >
                            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 dark:bg-white/60 bg-black/60 opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
                            <div className="flex items-center ml-2">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
                                    <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
                                </svg>
                                <span className="ml-2 text-black dark:text-white">
                                    Star on GitHub
                                </span>
                            </div>
                            <div className="ml-2 flex items-center gap-2 text-sm md:flex">
                                <svg
                                    className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                                    data-slot="icon"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                <span className="inline-block tabular-nums tracking-wider font-mono font-medium text-black dark:text-white">
                                    14K+
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="absolute opacity-65 w-full inset-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                        <div
                            className="absolute animate-ripple rounded-full bg-[hsl(106,1%,97%,0.25)]/25 shadow-xl border [--i:0]"
                            style={{
                                width: 180,
                                height: 180,
                                opacity: "0.2",
                                animationDelay: "0s",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "hsl(var(--foreground), 0.05)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)"
                            }}
                        />
                        <div
                            className="absolute animate-ripple rounded-full bg-[hsl(106,1%,97%,0.25)] shadow-xl border [--i:1]"
                            style={{
                                width: 250,
                                height: 250,
                                opacity: "0.17",
                                animationDelay: "0.06s",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "hsl(var(--foreground), 0.1)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)"
                            }}
                        />
                        <div
                            className="absolute animate-ripple rounded-full bg-[hsl(106,1%,97%,0.25)] shadow-xl border [--i:2]"
                            style={{
                                width: 320,
                                height: 320,
                                opacity: "0.14",
                                animationDelay: "0.12s",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "hsl(var(--foreground), 0.15)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)"
                            }}
                        />
                        <div
                            className="absolute animate-ripple rounded-full bg-[hsl(106,1%,97%,0.25)] shadow-xl border [--i:3]"
                            style={{
                                width: 390,
                                height: 390,
                                opacity: "0.11000000000000001",
                                animationDelay: "0.18s",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "hsl(var(--foreground), 0.2)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)"
                            }}
                        />
                        <div
                            className="absolute animate-ripple rounded-full bg-[hsl(106,1%,97%,0.25)] shadow-xl border [--i:4]"
                            style={{
                                width: 460,
                                height: 460,
                                opacity: "0.08000000000000002",
                                animationDelay: "0.24s",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "hsl(var(--foreground), 0.25)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)"
                            }}
                        />
                        <div
                            className="absolute animate-ripple rounded-full bg-[hsl(106,1%,97%,0.25)] shadow-xl border [--i:5]"
                            style={{
                                width: 530,
                                height: 530,
                                opacity: "0.05000000000000002",
                                animationDelay: "0.3s",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "hsl(var(--foreground), 0.3)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)"
                            }}
                        />
                        <div
                            className="absolute animate-ripple rounded-full bg-[hsl(106,1%,97%,0.25)] shadow-xl border [--i:6]"
                            style={{
                                width: 600,
                                height: 600,
                                opacity: "0.020000000000000018",
                                animationDelay: "0.36s",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "hsl(var(--foreground), 0.35)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)"
                            }}
                        />
                        <div
                            className="absolute animate-ripple rounded-full bg-[hsl(106,1%,97%,0.25)] shadow-xl border [--i:7]"
                            style={{
                                width: 670,
                                height: 670,
                                opacity: "-0.009999999999999981",
                                animationDelay: "0.42s",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "hsl(var(--foreground), 0.4)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)"
                            }}
                        />
                        <div
                            className="absolute animate-ripple rounded-full bg-[hsl(106,1%,97%,0.25)] shadow-xl border [--i:8]"
                            style={{
                                width: 740,
                                height: 740,
                                opacity: "-0.03999999999999998",
                                animationDelay: "0.48s",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "hsl(var(--foreground), 0.45)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)"
                            }}
                        />
                        <div
                            className="absolute animate-ripple rounded-full bg-[hsl(106,1%,97%,0.25)] shadow-xl border [--i:9]"
                            style={{
                                width: 810,
                                height: 810,
                                opacity: "-0.07",
                                animationDelay: "0.54s",
                                borderStyle: "dashed",
                                borderWidth: 1,
                                borderColor: "hsl(var(--foreground), 0.5)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RippleEffect