"use client"

import { Monitor, Smartphone, Tablet } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"
import { useDesignSystemSearchParams } from "@/app/(create)/lib/search-params"

export function PreviewControls() {
  const [params, setParams] = useDesignSystemSearchParams({
    history: "replace",
  })

  return (
    <div className="flex h-8 items-center gap-1.5 rounded-md border p-1">
      <ToggleGroup
        type="single"
        value={params.size.toString()}
        onValueChange={(newValue) => {
          if (newValue) {
            setParams({ size: parseInt(newValue) })
          }
        }}
        className="gap-1 *:data-[slot=toggle-group-item]:!size-6 *:data-[slot=toggle-group-item]:!rounded-sm"
      >
        <ToggleGroupItem value="100" title="桌面">
          <Monitor />
        </ToggleGroupItem>
        <ToggleGroupItem value="60" title="平板">
          <Tablet />
        </ToggleGroupItem>
        <ToggleGroupItem value="30" title="手机">
          <Smartphone />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
