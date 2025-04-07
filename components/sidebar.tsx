"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { BarChart3, CreditCard, Home, PlusCircle, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    name: "Add Expense",
    href: "/add",
    icon: PlusCircle,
  },
  {
    name: "Expense History",
    href: "/history",
    icon: CreditCard,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BarChart3 className="h-6 w-6" />
          <span>Expense Tracker</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto p-2">
        <ul className="grid gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} passHref>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn("relative w-full justify-start gap-2", pathname === item.href && "font-medium")}
                  asChild
                >
                  <div>
                    {pathname === item.href && (
                      <motion.div
                        layoutId="sidebar-indicator"
                        className="absolute left-0 top-0 z-10 h-full w-1 bg-primary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </div>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t p-4">
        <ModeToggle />
      </div>
    </div>
  )
}

