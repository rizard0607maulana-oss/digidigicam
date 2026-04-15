import * as React from "react"

export function Badge(props: React.ComponentProps<"span">) {
  return <span {...props} className={`text-xs px-2 py-1 border ${props.className || ""}`} />
}