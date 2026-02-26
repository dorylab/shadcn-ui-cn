import { SearchIcon } from "lucide-react"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/new-york-v4/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"
import { Kbd } from "@/registry/new-york-v4/ui/kbd"

export function EmptyInputGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - 未找到</EmptyTitle>
        <EmptyDescription>
          你要找的页面不存在。请在下方搜索你需要的内容。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="w-3/4">
          <InputGroupInput placeholder="试试搜索页面..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          需要帮助？<a href="#">联系支持</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}
