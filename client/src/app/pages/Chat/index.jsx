import React from 'react'
import ArrowIcon from '../../components/Icons/Arrow'
import RightSection from '../../components/RightSection'
import RightSectionEmpty from '../../components/RightSectionEmpty'
import styles from './index.module.css'

function Chat () {
  return (
    <div className={styles.container}>
      <section className={styles.leftSection}>
        <div className={styles.leftSectionHeader}>
          <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=250' />
          <ArrowIcon />
        </div>
        <input className={styles.leftSectionSearch} placeholder='Search or start a new chat' />
        <div className={styles.leftSectionTabs}>
          <div>Favourites</div>
          <div>Friends</div>
          <div>Groups</div>
        </div>
        <div>
          <div className={styles.leftSectionChat}>
            <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=250' />
            <div>
              <div className={styles.chatDetails}>
                <p>Cody Fisher</p>
                <p>Haha oh man</p>
              </div>
              <span>05:14 pm</span>
            </div>
          </div>
          <div className={styles.leftSectionChat}>
            <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=250' />
            <div>
              <div className={styles.chatDetails}>
                <p>Cody Fisher</p>
                <p>Haha oh man</p>
              </div>
              <span>05:14 pm</span>
            </div>
          </div>
          <div className={styles.leftSectionChat}>
            <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=250' />
            <div>
              <div className={styles.chatDetails}>
                <p>Cody Fisher</p>
                <p>Haha oh man</p>
              </div>
              <span>05:14 pm</span>
            </div>
          </div>
          <div className={styles.leftSectionChat}>
            <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=250' />
            <div>
              <div className={styles.chatDetails}>
                <p>Cody Fisher</p>
                <p>Haha oh man</p>
              </div>
              <span>05:14 pm</span>
            </div>
          </div>

        </div>
      </section>
      {/* <RightSectionEmpty /> */}
      <RightSection />
    </div>
  )
}

export default Chat