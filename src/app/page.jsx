import Image from "next/image";
import styles from "./page.module.css";
import portrait from "../Assets/Images/youssefRabei.png";
import Img1 from "../Assets/Images/Wiring.jpg";
import Img2 from "../Assets/Images/BigTable.jpg";

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
				<div className={styles.containerLeft}>
					<div className={styles.main}>
						<div className={styles.mainGrid}>
							<div className={styles.left}>
								<p>hello</p>
							</div>
							<div className={styles.right}>
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
							<div className={styles.left}>
								<Image
									className={styles.formatting}
									width={300}
									height={300}
									alt="self portrait"
									src={Img2}
								/>
							</div>
							<div className={styles.right}>
								<p>hello</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<p>contact us</p>
				</div>
			</div>
		</>
	);
}
