import * as React from "react"

export function Card(props: React.ComponentProps<"div">) {
  return <div {...props} className={`border rounded p-4 ${props.className || ""}`} />
}

export function CardHeader(props: React.ComponentProps<"div">) {
  return <div {...props} />
}

export function CardContent(props: React.ComponentProps<"div">) {
  return <div {...props} />
}

export function CardFooter(props: React.ComponentProps<"div">) {
  return <div {...props} />
}