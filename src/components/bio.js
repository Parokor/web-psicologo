import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <div className="bg-primary-50 rounded-lg p-6">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <StaticImage
            className="rounded-full"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.png"
            width={64}
            height={64}
            quality={95}
            alt="Foto de perfil"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-primary-800 mb-2">
            Sobre {author?.name || "Dr. Psicólogo"}
          </h4>
          <p className="text-neutral-600 text-sm leading-relaxed">
            {author?.summary || "Psicólogo clínico especializado en terapia cognitivo-conductual y terapia de pareja. Comprometido con el bienestar emocional y el crecimiento personal de mis pacientes."}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bio
