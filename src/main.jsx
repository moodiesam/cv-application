import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PersonalInfo from './components/personalInfo'
import Display from './components/display'
import EducationSection from './components/education'
import ExperienceSection from './components/experience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Display>
      <PersonalInfo />
      <EducationSection />
      <ExperienceSection />
    </Display>
  </React.StrictMode>,
)
