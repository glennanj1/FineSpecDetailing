import Typewriter from 'typewriter-effect';
import styles from '../Styles/TypeWriter.module.css'
export default function TypeWriter() {
    return (
        <div className={styles.TypeWriter}>
            <Typewriter
                options={{
                        strings: ['Where every detail matters', "Precision meets perfection", 'Providing top-notch car detailing services.'],
                        autoStart: true,
                        loop: true,
                    }}   
            />
        </div>
    );
}
