import { PlugZap, Plus } from "lucide-react"
import FeatureCard from "../FeatureCard"


const features = [
    {
        title: "Framework Agnostic",
        heading: "Support for popular frameworks.",
        description:
            "Supports popular frameworks, including React, Vue, Svelte, Astro, Solid, Next.js, Nuxt, Tanstack Start, Hono, and more.",
        link: "/docs",
        icon: PlugZap
    },
    {
        title: "Authentication",
        heading: "Email & Password Authentication.",
        description:
            "Built-in support for email and password authentication, with session and account management features.",
        link: "/docs",
        icon: PlugZap

    },
    {
        title: "Social Sign-on",
        heading: "Support multiple OAuth providers.",
        description:
            "Allow users to sign in with their accounts, including GitHub, Google, Discord, Twitter, and more.",
        link: "/docs",
        icon: PlugZap

    },
    {
        title: "Two Factor",
        heading: "Multi Factor Authentication.",
        description:
            "Secure your users accounts with two factor authentication with a few lines of code.",
        link: "/docs",
        icon: PlugZap

    },
    {
        title: "Multi Tenant",
        heading: "Organization Members and Invitation.",
        description:
            "Multi tenant support with members, organization, teams and invitation with access control.",
        link: "/docs",
        icon: PlugZap

    },
    {
        title: "Plugin Ecosystem",
        heading: "A lot more features with plugins.",
        description:
            "Improve your application experience with our official plugins and those created by the community.",
        link: "/docs",
        icon: PlugZap

    },
]

function Features() {
    return (
        <div className="grid grid-cols-1 relative md:grid-rows-2 md:grid-cols-3 border-b-[1.2px] border-b-border">
            <div className="hidden top-1/2 left-0 -translate-y-1/2 w-full grid-cols-3 z-10 pointer-events-none h-[1.2px] bg-border select-none absolute md:flex justify-evenly">
                <Plus size={30} className="text-muted-foreground translate-x-[0.35rem] -translate-y-1/2" />
                <Plus size={30} className="text-muted-foreground -translate-x-1 -translate-y-1/2" />
            </div>
            {
                features.map(function (item, index) {
                    return <FeatureCard
                        key={index}
                        item={item}
                    />
                })
            }
        </div>
    )
}

export default Features