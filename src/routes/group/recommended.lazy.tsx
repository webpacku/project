import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/group/recommended')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/group/recommended"!</div>
}
