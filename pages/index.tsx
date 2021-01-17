import Head from 'next/head'
import AboutMeSection from '../components/AboutMeSection'
import CertificationsSection from '../components/CertificationsSection'
import EducationSection from '../components/EducationSection'
import WorkExperienceSection from '../components/WorkExperienceSection'
import Layout from '../components/Layout'
// import { SecondaryNavigation } from '../components/SecondaryNavigation'

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>giraffesyo.io - Michael McQuade's Personal Site</title>

        <meta
          name='description'
          content={`Michael McQuade's personal site: Michael is a full-stack software engineer with a passion for web and augmented reality devleopment located in Houston, TX.`}
        />
      </Head>
      {/* <SecondaryNavigation /> */}
      <div className='section-header mt-2'>{'<AboutMe />'}</div>
      <AboutMeSection />
      <div className='mb-5'>
        <div className='section-header'>{'<Education />'}</div>
        <EducationSection />
      </div>
      <div className='flex flex-row flex-wrap'>
        <div className='section-header'>{'<Experience />'}</div>
        <WorkExperienceSection />
      </div>
      <div className='flex flex-row flex-wrap w-full'>
        <div className='section-header'>{'<Certifications />'}</div>
        <CertificationsSection />
      </div>
    </Layout>
  )
}

export default IndexPage
