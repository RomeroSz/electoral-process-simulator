import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
// import { Logo } from './Logo'

export function Header() {
  return (
    <header className="relative z-20 flex-none lg:pt-3">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          {/* <Logo className="h-12 w-auto text-slate-900" /> */}
          Logo
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              Simulador de votaciones
            </p>
          </div>
        </div>
        {/* <div className="hidden sm:mt-6 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://encuestadoraparametrica.com/">Página principal</Button>
        </div> */}
      </Container>
    </header>
  )
}
