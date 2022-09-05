import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p> I am multo ambiziozi...</p>
        <p>Ich bin ein Berliner...</p>
        <p>
          I love to do Surfi surfi stuff in water and play with my wife and
          baby!
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cube-spinner">
          <div className="face1"></div>
        </div>
      </div>
    </div>
  )
}

export default About
