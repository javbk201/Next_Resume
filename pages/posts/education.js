import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

function Education() {
  return (
    <Layout>
      <Head>
        <title>Education</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>INGENIERÍA ELECTRÓNICA</h1>
        <div className={utilStyles.lightText}>
          Universidad del Magdalena
        <br />
        Feb 2012 – Dic 2019
        </div>
        <div>
          <p>
            Acta de grado con reconocimiento
            Trabajo de grado: Diseño y monitoreo en tiempo real de un
            sistema de generación de voltaje mediante celdas de combustible
            microbianas (MFC)
          </p>
        </div>
        <img scr="../../public/images/Udemy.jpg" alt="diploma">
        </img>
      </article>
    </Layout>
  )
}

export default Education
