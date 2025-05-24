import { type LucideIcon } from 'lucide-react'
interface Prop {
    item: {
        icon: LucideIcon;
        title: string;
        heading: string;
        description: string;
        link: string
    }

}
function FeatureCard({
    item }: Prop) {
    console.log(item.heading.split("."));
    const headingData = item.heading.split(".")
    return (
        <div className="justify-center border-l-[1.2px] md:min-h-[240px] border-t-[1.2px] md:border-t-0 border-l-border border-t-border transform-gpu flex flex-col p-10">
            <div className="flex items-center gap-2 my-1">
                <item.icon size={16} className="dark:text-white text-black" />
                <p className="text-gray-600 dark:text-gray-400">{item.title}</p>
            </div>
            <div className="mt-2">
                <div className="max-w-full">
                    <div className="flex gap-3">
                        <p className="max-w-lg text-xl font-normal tracking-tighter md:text-2xl">
                            {headingData[0]} <strong> {headingData[1]}</strong>.
                        </p>
                    </div>
                </div>
                <p className="mt-2 text-sm text-left text-muted-foreground">
                    {item.description}
                    <a className="ml-2 underline" href={item.link} target="_blank">
                        Learn more
                    </a>
                </p>
            </div>
        </div >
    )
}

export default FeatureCard