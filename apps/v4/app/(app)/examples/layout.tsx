import { Metadata } from "next"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageNav } from "@/components/page-nav"
import { ThemeSelector } from "@/components/theme-selector"
import { Button } from "@/registry/new-york-v4/ui/button"

export const dynamic = "force-static"
export const revalidate = false

const title = "shadcn/ui - 为你的设计系统打好基础"
const description =
  "一组精心设计的组件，你可以自定义、扩展并在此基础上构建。从这里开始，让它成为你的作品。开源，开放代码。"

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

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs/installation">开始使用</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/docs/components">查看组件</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <PageNav id="examples" className="hidden md:flex">
        <ExamplesNav className="[&>a:first-child]:text-primary flex-1 overflow-hidden" />
        <ThemeSelector className="mr-4 hidden md:flex" />
      </PageNav>
      <div className="container-wrapper section-soft flex flex-1 flex-col pb-6">
        <div className="theme-container container flex flex-1 scroll-mt-20 flex-col">
          <div className="bg-background flex flex-col overflow-hidden rounded-lg border bg-clip-padding md:flex-1 xl:rounded-xl">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
