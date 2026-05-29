import { ReactNode } from "react"

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="bg-[var(--background)]">{children}</div>
}
