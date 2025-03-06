import { useEffect, useState } from 'react'
import styles from './Hero.module.scss'


import { motion, AnimatePresence } from "framer-motion";
import heroImagesPath from './hero-images';
import Button from '../../UI/Button/Button';
import OLogo from '../OlLgo/OLogo';
const Hero = () => {

    const [selectedHeroImageIndex, setSelectedHeroImageIndex] = useState<number>(0)
    useEffect(() => {
        const heroImagesInterval = setInterval(() => {
            setSelectedHeroImageIndex(prev => (prev + 1) % heroImagesPath.length)
        }, 10000)

        return () => {
            clearInterval(heroImagesInterval)
        }
    })
    return (
        <div className={styles['hero-section']}>
            <div className={styles['hero-section-overlay']}>
                {
                <AnimatePresence>
                    <motion.div
                        key={selectedHeroImageIndex}
                        style={{
                            backgroundImage: `url(${heroImagesPath[selectedHeroImageIndex]})`
                        }}
                        className={styles['image-slider']}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 0.2, x: 0 }}
                        exit={{ opacity: 0, x: +50 }}
                        transition={{ duration: 1, ease:'easeInOut' }}
                    />
                </AnimatePresence>
                }
            </div>
            <div className={styles['hero-section-content']}>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                >
                    <div className={styles['content']}>
                        <div className={styles['title']}>
                            <OLogo />
                            <div className={styles['rest-title']}>
                                ne Place Where The Events Live
                            </div>
                            
                        </div>
                        <div className={styles['subtitle']}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, non. Eius quae architecto delectus aspernatur maiores, minima dignissimos nihil error dicta cumque, enim exercitationem, aliquid et rerum. Enim, nihil odio!
                        </div>
                        <Button>
                            <div>Get Started</div>
                        </Button>
                    </div>
                </motion.div>

            </div>
        </div>

    )
}

export default Hero