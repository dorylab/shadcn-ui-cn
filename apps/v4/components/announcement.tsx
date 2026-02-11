import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"

export function Announcement() {
  return (
    <Badge asChild variant="secondary" className="bg-transparent">
      <Link href="/docs/changelog">
        <span className="flex size-2 rounded-full bg-blue-500" title="新内容" />
        新增组件：Field、Input Group、Item 等 <ArrowRightIcon />
      </Link>
    </Badge>
  )
}
