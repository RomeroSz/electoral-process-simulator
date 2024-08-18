import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'

export default function NotFound() {
  return (
    <Layout showFooter={false}>
      <div className="relative flex h-full items-center py-20 sm:py-36">
        <Container className="relative flex w-full flex-col items-center">
          <p className="font-display text-2xl tracking-tight text-blue-900">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Página no encontrada
          </h1>
          <p className="mt-4 text-lg tracking-tight text-blue-900">
            Lo sentimos, no hemos podido encontrar la página que estás buscando. Es posible que estés saliendo del simulador de votos a una página inexistente.
          </p>
          <Button href="/" className="mt-8">
            Volver a la página de inicio
          </Button>
        </Container>
      </div>
    </Layout>
  )
}

