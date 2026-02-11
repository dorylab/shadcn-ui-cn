import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

export function OpenInV0Cta({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group bg-surface text-surface-foreground relative flex flex-col gap-2 rounded-lg p-6 text-sm",
        className
      )}
    >
      <div className="text-base leading-tight font-semibold text-balance group-hover:underline">
        将你的 shadcn/ui 应用部署到 Vercel
      </div>
      <div className="text-muted-foreground">
        受到 OpenAI、Sonos、Adobe 等团队的信赖。
      </div>
      <div className="text-muted-foreground">
        Vercel 提供工具和基础设施，助你大规模部署应用与功能。
      </div>
      <Button size="sm" className="mt-2 w-fit">
        立即部署
      </Button>
      <a
        href="https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout"
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0"
      >
        <span className="sr-only">部署到 Vercel</span>
      </a>
    </div>
  )
}
