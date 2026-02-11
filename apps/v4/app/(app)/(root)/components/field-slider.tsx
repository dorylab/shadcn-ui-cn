"use client"

import { useState } from "react"

import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@/registry/new-york-v4/ui/field"
import { Slider } from "@/registry/new-york-v4/ui/slider"

export function FieldSlider() {
  const [value, setValue] = useState([200, 800])
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldTitle>价格范围</FieldTitle>
        <FieldDescription>
          设置你的预算范围（$
          <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
          <span className="font-medium tabular-nums">{value[1]}</span>）。
        </FieldDescription>
        <Slider
          value={value}
          onValueChange={setValue}
          max={1000}
          min={0}
          step={10}
          className="mt-2 w-full"
          aria-label="价格范围"
        />
      </Field>
    </div>
  )
}
