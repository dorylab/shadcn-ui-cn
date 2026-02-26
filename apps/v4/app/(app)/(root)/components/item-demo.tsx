import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/new-york-v4/ui/item"

export function ItemDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>双因素认证</ItemTitle>
          <ItemDescription className="text-pretty xl:hidden 2xl:block">
            通过邮箱或手机号验证。
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">启用</Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="#">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>你的个人资料已验证。</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}
