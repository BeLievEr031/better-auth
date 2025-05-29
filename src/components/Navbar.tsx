import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="flex flex-col sticky top-0 bg-background backdrop-blur-md z-30">
            <nav className="md:grid grid-cols-12 md:border-b border-border top-0 flex items-center justify-between" >
                <Link
                    className="md:border-r border-border md:px-5 px-2.5 py-4 text-foreground md:col-span-2 shrink-0 transition-colors md:w-[268px] lg:w-[286px]"
                    to="/"
                >
                    <div className="flex flex-col gap-2 w-full">
                        <div className="relative">
                            <div className="cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <svg
                                        width="60"
                                        height="45"
                                        viewBox="0 0 60 45"
                                        fill="none"
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 0H15V15H30V30H15V45H0V30V15V0ZM45 30V15H30V0H45H60V15V30V45H45H30V30H45Z"
                                            className="fill-black dark:fill-white"
                                        ></path>
                                    </svg>
                                    <p className="select-none">BETTER-AUTH.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="md:col-span-10 flex items-center justify-end relative ">
                    <ul className="md:flex items-center divide-x divide-border w-max hidden shrink-0">
                        {[
                            { href: "/", label: "helo_", active: true },
                            { href: "/docs", label: "docs" },
                            // { href: "/blogs", label: "blog" },
                            { href: "/changelogs", label: "changelogs" },
                            { href: "/community", label: "community" },
                        ].map(({ href, label, active }) => (
                            <li key={href} className="relative group">
                                <Link
                                    to={href}
                                    className={`w-full h-full block py-4 px-5 transition-colors group-hover:text-foreground ${active ? "text-foreground" : "text-muted-foreground"
                                        }`}
                                >
                                    {label}
                                </Link>
                                <div
                                    className={`absolute bottom-0 h-0.5 bg-muted-foreground transition-all duration-500 ${active
                                        ? "opacity-100 w-full"
                                        : "opacity-0 group-hover:opacity-100 group-hover:w-full w-0"
                                        }`}
                                ></div>
                            </li>
                        ))}
                        <li className="relative group bg-muted/20">
                            <a
                                href="https://github.com/better-auth/better-auth"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full block py-4 px-5 transition-colors group-hover:text-foreground text-muted-foreground"
                            >
                                <FaGithub size={24} />
                            </a>
                            <div className="absolute bottom-0 h-0.5 bg-muted-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-full w-0"></div>
                        </li>
                        <li>

                        </li>
                    </ul>
                    <button className="border-l-border border-l-2 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground size-9 flex ring-0 shrink-0 md:w-[3.56rem] md:h-14 md:border-l-border md:text-muted-foreground max-md:-mr-1.5 max-md:hover:bg-transparent" aria-label="Toggle Theme" type="button" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                        <IoMdMoon size={24} />
                    </button>

                    <button
                        aria-label="Mobile nav icon"
                        type="button"
                        className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid :ring-destructive/40 px-2 md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-foreground" >
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75m0 10.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {
                mobileMenuOpen && (
                    <div className="block md:hidden bg-background border-t">
                        <ul className="flex flex-col divide-y">
                            {[
                                { href: "/", label: "helo_", active: true },
                                { href: "/docs", label: "docs" },
                                // { href: "/blogs", label: "blog" },
                                { href: "/changelogs", label: "changelogs" },
                                { href: "/community", label: "community" },
                            ].map(({ href, label, active }) => (
                                <li key={href}>
                                    <Link
                                        to={href}
                                        className={`block w-full py-4 px-5 transition-colors hover:text-foreground ${active ? "text-foreground" : "text-muted-foreground"}`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div >
    );
};

export default Navbar;