import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/new-york-v4/ui/empty"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

export function SpinnerEmpty() {
  return (
    <Empty className="w-full border md:p-6">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>正在处理你的请求</EmptyTitle>
        <EmptyDescription>
          请稍候，我们正在处理你的请求。请勿刷新页面。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          取消
        </Button>
      </EmptyContent>
    </Empty>
  )
}
