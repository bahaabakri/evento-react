import styles from './Hero.module.scss'
import { motion } from "framer-motion";
import Button from '../../UI/Button/Button';
import OLogo from '../OlLgo/OLogo';
import HeroOverlay from './HeroOverlay/HeroOverlay';
const Hero = () => {
    return (
        <div className={styles['hero-section']}>
            <HeroOverlay />
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