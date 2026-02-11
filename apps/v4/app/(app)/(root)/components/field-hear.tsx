import { Card, CardContent } from "@/registry/new-york-v4/ui/card"
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/registry/new-york-v4/ui/field"

const options = [
  {
    label: "社交媒体",
    value: "social-media",
  },

  {
    label: "搜索引擎",
    value: "search-engine",
  },
  {
    label: "推荐",
    value: "referral",
  },
  {
    label: "其他",
    value: "other",
  },
]

export function FieldHear() {
  return (
    <Card className="py-4 shadow-none">
      <CardContent className="px-4">
        <form>
          <FieldGroup>
            <FieldSet className="gap-4">
              <FieldLegend>你是如何了解到我们的？</FieldLegend>
              <FieldDescription className="line-clamp-1">
                请选择最符合你了解我们的方式。
              </FieldDescription>
              <FieldGroup className="flex flex-row flex-wrap gap-2 [--radius:9999rem]">
                {options.map((option) => (
                  <FieldLabel
                    htmlFor={option.value}
                    key={option.value}
                    className="!w-fit"
                  >
                    <Field
                      orientation="horizontal"
                      className="gap-1.5 overflow-hidden !px-3 !py-1.5 transition-all duration-100 ease-linear group-has-data-[state=checked]/field-label:!px-2"
                    >
                      <Checkbox
                        value={option.value}
                        id={option.value}
                        defaultChecked={option.value === "social-media"}
                        className="-ml-6 -translate-x-1 rounded-full transition-all duration-100 ease-linear data-[state=checked]:ml-0 data-[state=checked]:translate-x-0"
                      />
                      <FieldTitle>{option.label}</FieldTitle>
                    </Field>
                  </FieldLabel>
                ))}
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
