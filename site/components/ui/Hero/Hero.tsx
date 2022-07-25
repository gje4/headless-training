import React, {CSSProperties, FC} from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
interface HeroProps {
  className?: string
  headline: string
  description: string
  image?: string
}

const Hero: FC<HeroProps> = ({ headline, description , image}) => {
  const styles: CSSProperties = { backgroundImage: `url(${image})` }

  return (
    <div className="bg-center" style={styles}>
      <Container>
        <div className={s.root}>
          <h2 className={s.title}>{headline}</h2>
          <div className={s.description}>
            <p>{description}</p>
            <Link href="/">
              <a className="flex items-center text-accent-0 pt-3 font-bold hover:underline cursor-pointer w-max-content">
                Read it here
                <ArrowRight width="20" heigh="20" className="ml-1" />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
