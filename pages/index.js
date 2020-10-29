import React from "react";
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'

import '@coreui/icons/css/all.css'
import '@coreui/icons/css/brand.css'

import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
         Ingeniero electrónico de la Universidad del Magdalena
         con conocimientos en programación en especial en el campo
         de desarrollo de aplicaciones web con reactjs, nodejs
         entre otros. Manejo de sistemas de control de versiones
         como GitHub, servicios ofimáticos en la nube, como Google
         Docs. Familiarizado con entornos Linux. Apasionado por
         temas relacionados con las nuevas tecnologías, matemáticas
         y física.
        </p>
        <p>
          [Electronic Engineer from Universidad del Magdalena
          with knowledge in programming, especially in the
          field of web application development with reactjs,
          nodejs among others. Management of version control
          systems such as GitHub, cloud-based office services
          such as Google Docs. Familiar with Linux environments.
          Passionate about new technologies, mathematics and physics.]
          </p>
      </section>

      {//Education section
      }

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Education</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href={`/posts/education`}>
              <a>INGENIERÍA ELECTRÓNICA - Universidad del Magdalena</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              Feb 2012 – Dic 2019
            </small>
          </li>
        </ul>
      </section>

    {//End education section
    }

    {//Certification section
    }
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Certification</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>

      {//End certification section
      }

      {//Skills section
      }


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Skills</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
              Linux
            <br />
          </li>
          <li className={utilStyles.listItem}>
              Google Docs
            <br />
          </li>
          <li className={utilStyles.listItem}>
              C
            <br />
          </li>
          <li className={utilStyles.listItem}>
               GitHub
            <br />
          </li>
          <li className={utilStyles.listItem}>
               Next.js
            <br />
          </li>
          <li className={utilStyles.listItem}>
               Resolución de Problemas
            <br />
          </li>
        </ul>
      </section>
      <section>
        <footer className={utilStyles.footer}>
          <div className={utilStyles.grid}>
            <a href="https://github.com/javbk201">
            <i className={"cib-github"}> GitHub</i>
            </a>

            <a href="https://www.linkedin.com/in/jaime-andrés-avendaño-villa-65183315b/ ">
            <i className={"cib-linkedin-in"}> LinkedIn </i>
            </a>
          </div>
        </footer>
      </section>
    </Layout>
  )
}
