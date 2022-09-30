import LeftSection from '../../components/LeftSection'
import RightSection from '../../components/RightSection'
import RightSectionEmpty from '../../components/RightSectionEmpty'
import styles from './index.module.css'

function Chat () {
  return (
    <div className={styles.container}>
      <LeftSection />
      {/* <RightSectionEmpty /> */}
      <RightSection />
    </div>
  )
}

export default Chat
