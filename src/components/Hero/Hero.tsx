import { useEffect, useState } from 'react'
import styles from './Hero.module.scss'


import { motion, AnimatePresence } from "framer-motion";
import heroImagesPath from './hero-images';
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
    )
}

export default Hero