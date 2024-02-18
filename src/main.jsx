import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PersonalInfo from './components/personalInfo'
import Display from './components/display'
import Section from './components/education'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Display>
      <PersonalInfo />
      <Section />
    </Display>
  </React.StrictMode>,
)
