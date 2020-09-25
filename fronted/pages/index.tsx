import styles from '../styles/Home.module.css'
import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'

interface IProps {
  className?: string;
  Head?: any;
  TopHeader?: any;
}

export default function Home({} :IProps) {
  return (
      <div>
        <TopHeader />
        <section>
          <div className={styles.banner}>
            <div className={styles.slogan_top}>
              <img src="/assets/index/slogan_top.svg" alt="slogan_up"/>
            </div>
            <div className={styles.slogan_down}>
              <img src="/assets/index/slogan_down.svg" alt="slogan_down" />
            </div>
            <div className={styles.actionBtn}>
              <img className={styles.left} src="/assets/index/left_astronaut.svg" />
              <button className={styles.action_button}>
                <a href="">
                  踏上旅程
                </a>
              </button>
              <img className={styles.right} src="/assets/index/astronaut_water.svg" />
              <img className={styles.moon} src="/assets/index/moon.svg" />
            </div>
            <div className={styles.block}>
              <div className={styles.brave_word}>
                <h4>「上一次勇敢，是什麼時候？」</h4>
                <p>我們害怕表達自我想法、害怕跨出舒適圈，</p>
                <p>更害怕在硬實力前自己是懦弱的。</p>
                <p>恐懼如影隨形，而未來職涯的徬徨，雪上加霜。</p>
                <p>我們只是缺少改變的機會，</p>
                <p>一個能擺脫怯弱束縛的機會，</p>
                <p>一個能勇敢成就平凡自己的機會。</p>
              </div>
              <div className={styles.brave_astronaut}>
                <img src="/assets/index/right_astronaut.svg" />
              </div>
            </div>
            <div className={styles.block}>
              <div style={{textAlign: 'center'}}>
                <h4>在資種，我們能提供......</h4>
              </div>
              <div style={{width: '100%', height: '50%'}}>
                <div className={styles.provide} style={{textAlign: 'center'}}>
                  <img src="/assets/index/flag.svg" />
                  <p style={{ color: '#73FFE6', fontWeight: 600}}>
                    3大專案
                  </p>
                  <p>累積業界實務</p>
                  <p>職涯探索與深化</p>
                  <p>跨領域團隊夥伴</p>
                </div>
                <div className={styles.provide}>
                  <img src="/assets/index/backpack.svg" />
                  <p style={{ color: '#73FFE6', fontWeight: 600 }}>
                    10 + 課程
                  </p>
                  <p>擺脫學校框架</p>
                  <p>厚實資訊素養</p>
                  <p>突破視野侷限</p>
                </div>
                <div className={styles.provide}>
                  <img src="/assets/index/left_astronaut.svg" />
                  <p style={{ color: '#73FFE6', fontWeight: 600 }}>
                    500 + 校友資源
                  </p>
                  <p>不藏私回饋</p>
                  <p>跨代交流分享</p>
                  <p>各界人脈建立</p>
                </div>
                <div className={styles.provide}>
                  <img src="/assets/index/shovel.svg" />
                  <p style={{ color: '#73FFE6', fontWeight: 600 }}>
                    Mentorship
                  </p>
                  <p>歷屆校友共學</p>
                  <p>提攜突破瓶頸</p>
                  <p>共好未來發展</p>
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.baby}>
                <img src="/assets/index/itseed_baby.svg" />
              </div>
              <div className={styles.take_word}>
                <p>我們透過引進多元學子，連結跨界業師及校友社群，</p>
                <p>並整合理論與實務，營造樂於學習、分享和回饋的環境，</p>
                <p>以培育具備資訊素養的跨領域人才。</p>
              </div>
            </div>
            <div className={styles.block}>
              <div>
              </div>
            </div>
            <div className={styles.block}>
              <div style={{"textAlign" : "center"}}>
                <p style={{fontSize : '4vh'}}>「再不勇敢，等待何時？」</p>
                <button className={styles.action_button}>
                  <a href="">
                    踏上旅程
                </a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <TemplateFooter />
      </div>
  )
}
