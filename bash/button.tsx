import * as React from "react"

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`border px-3 py-1 ${props.className || ""}`} />
}