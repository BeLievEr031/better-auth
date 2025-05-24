
import { cn } from "../../lib/utils"
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]",
                )}
            >
                {items.map((item) => (
                    <li
                        className="relative"
                        key={item.name}
                    >
                        <div className="flex flex-col justify-between h-[220px] rounded-none border-[1.2px] border-black/20 shrink-0 grow-0 w-[450px] dark:border-white/10">
                            <p className="px-5 py-5 tracking-tight text-md font-extralight sm:text-xl md:text-lg text-pretty text-text-primary dark:text-dark-text-primary">
                                "{/* */}This has been the best auth experience by a mileee, auto generated
                                my drizzle schemas for users, sessions etc, full type safe and dead simple
                                api, well done @better_auth 👏👏{/* */}."
                            </p>
                            <div className="flex overflow-hidden h-[28%] gap-1 w-full border-t-[1.2px]">
                                <div className="flex items-center w-3/4 gap-3 px-4 py-3">
                                    <img
                                        src="/people-say/dev-ed.png"
                                        className="w-10 h-10 rounded-full"
                                        alt="avatar"
                                    />
                                    <div className="flex flex-col items-start justify-start flex-1 gap-0">
                                        <h5 className="text-base font-medium md:text-md">Dev Ed</h5>
                                        <p className="text-sm md:text-base text-black/30 mt-[-4px] text-text-tertiary dark:text-white/50 dark:text-dark-text-tertiary">
                                            Content Creator
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[1px] bg-black/20 dark:bg-white/20" />
                                <div className="flex items-center justify-center max-w-full mx-auto">
                                    <a
                                        target="_blank"
                                        href="https://x.com/edgarasben/status/1856336936505590160"
                                    >
                                        <svg
                                            width={30}
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-full"
                                        >
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};
