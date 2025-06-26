import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
          <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
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
