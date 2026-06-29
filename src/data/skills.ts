import { FiDatabase, FiMousePointer } from 'react-icons/fi'
import { SiGithub, SiGithubcopilot, SiGit, SiDotnet, SiJavascript, SiOpenai, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import type { TechItem } from '../components/common/TechStackSection'

export const skills: TechItem[] = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'C#', icon: SiDotnet },
  { name: '.NET', icon: SiDotnet },
  { name: 'SQL Server', icon: FiDatabase },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'ChatGPT', icon: SiOpenai },
  { name: 'GitHub Copilot', icon: SiGithubcopilot },
  { name: 'Cursor AI', icon: FiMousePointer },
]
