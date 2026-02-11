import { Metadata } from "next"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { BlocksNav } from "@/components/blocks-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageNav } from "@/components/page-nav"
import { Button } from "@/registry/new-york-v4/ui/button"

const title = "为 Web 而生的构建模块"
const description =
  "干净、现代的构建模块，直接复制粘贴到你的应用中。适用于所有 React 框架。开源，永久免费。"

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

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#blocks">浏览 Blocks</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/blocks">添加 Blocks</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <PageNav id="blocks">
        <BlocksNav />
        <Button
          asChild
          variant="secondary"
          size="sm"
          className="mr-7 hidden shadow-none lg:flex"
        >
          <Link href="/blocks/sidebar">浏览所有 Blocks</Link>
        </Button>
      </PageNav>
      <div className="container-wrapper section-soft flex-1 md:py-12">
        <div className="container">{children}</div>
      </div>
    </>
  )
}
