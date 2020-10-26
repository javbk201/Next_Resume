import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'

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
               Self confidence <i class="cib-github"></i>
            <br />
          </li>
          <li className={utilStyles.listItem}>
               Next.js <i class="cib-github"></i>
            <br />
          </li>
        </ul>
      </section>
      <section>
        <footer className={utilStyles.footer}>
        <a href="https://github.com/javbk201">
        <i class="cli-bed">GitHub</i>
        </a>
        </footer>
      </section>
    </Layout>
  )
}
