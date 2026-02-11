import { Metadata } from "next"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york-v4/ui/button"

const title = "挑选一套配色，让它属于你。"
const description =
  "试试我们精选的主题，复制粘贴即可应用到你的项目。全新主题编辑器即将上线。"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function ThemesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#themes">浏览主题</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/theming">查看文档</Link>
          </Button>
        </PageActions>
      </PageHeader>
      {children}
    </div>
  )
}
