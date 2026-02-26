import { BotIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

export function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        <BotIcon /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon-sm" aria-label="打开弹出层">
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="rounded-xl p-0 text-sm">
          <div className="px-4 py-3">
            <div className="text-sm font-medium">代理任务</div>
          </div>
          <Separator />
          <div className="p-4 text-sm *:[p:not(:last-child)]:mb-2">
            <Textarea
              placeholder="用自然语言描述你的任务。"
              className="mb-4 resize-none"
            />
            <p className="font-medium">使用 Copilot 开始新任务</p>
            <p className="text-muted-foreground">
              用自然语言描述你的任务。Copilot 将在后台工作并为你创建拉取请求供你审查。
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
