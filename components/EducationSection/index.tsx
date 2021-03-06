import { useTheme } from 'next-themes'
import Image from 'next/image'
// import useDarkMode from '../../hooks/useDarkMode'
interface ISchool {
  name: string
  logo: string
  darklogo?: string
  degree?: {
    type: string
    major?: string
    subtitle: string
  }
}

const schools: ISchool[] = [
  {
    name: 'University of Houston',
    logo: '/images/education/uh.svg',
    darklogo: '/images/education/uh_dark.svg',
    degree: {
      type: 'Master of Science',
      major: 'Computer Sience',
      subtitle: 'In progress',
    },
  },
  {
    name: 'Oklahoma State University',
    logo: '/images/education/osu.svg',
    degree: {
      type: 'Bachelor of Science',
      major: 'Computer Science',
      subtitle: '3.70 GPA',
    },
  },
  {
    name: 'Monterrey Institute of Technology and Higher Education',
    logo: '/images/education/tec.svg',
    darklogo: '/images/education/tec_dark.svg',
    degree: {
      type: 'Full year international study abroad',
      subtitle: '',
    },
  },
]

const EducationSection: React.FC = () => {
  const { theme } = useTheme()
  const Schools = schools.map((school) => (
    <div
      className='grid md:grid-cols-2 w-full md:w-2/3 ml-auto mr-auto  items-center my-4'
      key={school.name}
    >
      <div className='h-32 w-64 relative justify-self-center md:justify-self-end'>
        <Image
          quality={80}
          layout='fill'
          alt={school.name + ' logo'}
          src={
            theme === 'dark' && school.darklogo ? school.darklogo : school.logo
          }
        />
      </div>
      <div className='ml-10'>
        <div className='font-semibold dark:text-orange-code text-2xl'>
          {school.name}
        </div>
        <div className='text-blue-700 dark:text-blue-code'>
          <strong className='font-semibold'>{school.degree.type}</strong>
          {school.degree.major && ','} {school.degree.major}
        </div>
        <div className='text-black italic dark:text-green-code'>
          {school.degree.subtitle}
        </div>
      </div>
    </div>
  ))

  return <> {Schools}</>
}

export default EducationSection
