import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="py-24 bg-pattern min-h-screen flex items-center">
        <div className="container-custom pt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-primary-500 opacity-20 mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Página no encontrada
              </h2>
            </div>

            <div className="card p-8 mb-8">
              <p className="text-lg text-neutral-700 mb-6">
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
              </p>

              <p className="text-neutral-600 mb-8">
                Puedes volver a la página principal o contactar si necesitas ayuda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="btn-primary">
                  Volver al inicio
                </Link>

                <Link to="/#contacto" className="btn-outline">
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Página no encontrada" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
