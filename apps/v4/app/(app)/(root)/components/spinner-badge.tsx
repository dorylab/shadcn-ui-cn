import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

export function SpinnerBadge() {
  return (
    <div className="flex items-center gap-2">
      <Badge>
        <Spinner />
        同步中
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        更新中
      </Badge>
      <Badge variant="outline">
        <Spinner />
        加载中
      </Badge>
    </div>
  )
}
