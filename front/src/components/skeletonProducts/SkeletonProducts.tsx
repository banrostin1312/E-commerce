//styles
import styles from './skeletonProducts.module.css'


const SkeletonProduct: React.FC = () => {
    return (
      <div className={styles.skeleton}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
      </div>
    );
  }

  export default SkeletonProduct;