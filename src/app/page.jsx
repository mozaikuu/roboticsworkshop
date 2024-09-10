import Image from "next/image";
import styles from "./page.module.css";
import portrait from "../Assets/Images/youssefRabei.png";
import Img1 from "../Assets/Images/Wiring.jpg";
import Img2 from "../Assets/Images/BigTable.jpg";
import Img3 from "../Assets/Images/Wiring2.jpg";

export default function Home() {
	return (
		<>
			<div className={styles.siteWrapper}>
				<div className={styles.aboutMeCenter}>
					<div className={styles.aboutMe}>
						<Image
							width={300}
							height={300}
							alt="self portrait"
							src={portrait}
						/>
					</div>
				</div>
				<div className={styles.aboutMeText}>
					<div className={styles.block2}>
						<span className={styles.margin}>
							Spark Curiosity, Build Robots!
						</span>
					</div>
				</div>
				<div className={styles.containerLeft}>
					<div className={styles.main}>
						<div className={styles.mainGrid}>
							<div className={styles.block}>
								<span className={styles.margin}>
									Dive into the exciting world of robotics and
									electronics with our hands-on workshops for young
									creators! Learn the basics of Arduino and robotics,
									and take home the innovative projects you build.
								</span>
							</div>
							<div className={styles.block}>
								<Image
									className={styles.formatting}
									width={300}
									height={300}
									alt="self portrait"
									src={Img1}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.containerRight}>
					<div className={styles.main}>
						<div className={styles.mainGrid}>
							<div className={styles.block}>
								<Image
									className={styles.formatting}
									width={300}
									height={300}
									alt="self portrait"
									src={Img2}
								/>
							</div>
							<div className={styles.block}>
								<span className={styles.margin}>
									Unleash your {"child's"} inner engineer at the
									Robotics Workshop where we make learning about
									Arduino and robotics a thrilling experience. With
									every course, students build their own device or
									robot, which they take home - a perfect blend of
									education and excitement!
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.containerLeft}>
					<div className={styles.main}>
						<div className={styles.mainGrid}>
							<div className={styles.block}>
								<span className={styles.margin}>
									Course Materials: Arduino, Sensors, Motors, LEDs.
									Course curriculum: Arduino, Robotics.
								</span>
							</div>
							<div className={styles.block}>
								<Image
									className={styles.formatting}
									width={300}
									height={300}
									alt="self portrait"
									src={Img3}
								/>
							</div>
						</div>
					</div>
				</div>
				<div>
					<p>
						Ready to explore the world of Programming? Call us now at +20
						111 153 4795 and secure your spot!
					</p>
				</div>
			</div>
		</>
	);
}
