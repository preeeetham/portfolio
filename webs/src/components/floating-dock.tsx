'use client'
import { FloatingDock } from "@/components/ui/floating-dock"
import { IconAddressBook ,IconBrandGithub, IconBrandX, IconLogs, IconHome, IconTerminal2 } from "@tabler/icons-react"


export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },

    {
      title: "Projects",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Contact Me",
      icon: <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Blogs",
      icon: <IconLogs className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
  ]
  return (
    <div className="flex items-end justify-center h-[44rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  )
}

