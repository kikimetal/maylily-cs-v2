import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Card from "./Card"
import Footer from "./Footer"

const Page02_01 = props => {

  const { heading } = props.page02_01

  return (
    <div className="Page02_01 page">

      <Heading main={heading.main} sub={heading.sub} />

      <section>
        1999年創業以来、心豊かに生きるために役立つものの開発を目指し、
香りを柱に美容・健康・癒し・教育・文化と多岐にわたる活動を行ってまいりました。

無意識の一呼吸の中にある匂いが「香り」となって「心」に届いたとき、心は感じ、動きます。

目に見えない香りには、むしろ見える以上に、イメージを印象付け、心を動かす大きな力を持っています。

私たちは安心する香り、元気が出る香り、幸せになる香りなど、心動かす香り製品の開発と、

いきいきとした豊かな暮らしに役立つ魅力ある製品の創造を目指します。
      </section>

      <div>
        ＞山下文江　プロフィール写真　※写真下に肩書きを表示
        代表取締役社長
フレグランスデザイナー
山下文江
      </div>

      <section>
        経歴
調香・アロマテラピーを広く学んだ後、フランス グラースの調香専門学校 ASFO GRASSE へ留学。帰国後、フレグランスデザイナーとして活動をはじめ、企業・個人からの依頼でオリジナルの香りを制作する。
また、癒し（フレグランスセラピー）と教育（フレグランスアート）をテーマにした、独自の香り創りメソッド「香楽KOUGAKU」を構築。誰にでも楽しめる香り創りによって、嗅覚を使った情操教育を実践。一般社団法人香楽メソッド普及協会を設立し、普及に努める。

一方で、自らの経験を活かし、「ローズを食する」という新習慣を広めるために、2000年よりブルガリア産ローズオイル・ローズウォーターを使用した製品開発・普及活動を続ける。2016年、自社ブランドとして「ローズダレーナ」を立ち上げる。
また、ブルガリア大使館からの後援を受け、一般社団法人ブルガリアンローズ文化協会を設立し、ブルガリアのバラを日本に広める活動を行う。活動の一環として、6月2日「ローズの日」の制定や、有名シェフらと「バラの騎士と女神の会」を結成し、ブルガリアンローズを食する文化を日本から世界へ発信する。

著書
『命をつむぐバラ』『香楽』（ハースト婦人画報社）
『幸せを呼ぶ香りのセラピー』（ほんの木出版）
      </section>

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  page02_01: state.routes.page02_01,
})

export default connect(mapStateToProps)(Page02_01)
