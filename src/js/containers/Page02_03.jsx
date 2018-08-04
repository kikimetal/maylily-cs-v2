import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Card from "./Card"
import Footer from "./Footer"

const Page02_03 = props => {

  const { heading } = props.page02_03

  return (
    <div className="Page02_03 page">

      <Heading main={heading.main} sub={heading.sub} />

      <section>
        メイリリィは、本業を通じた社会貢献に加え、文化・芸術・教育・福祉の分野を中心に、会社の強みや技術、人材といった経営資源を活用して、積極的な社会貢献活動に取り組んでいます。
特に、ブルガリアンローズの普及、及び新しいブルガリアンローズ文化の創造・発信を目的に活動している、一般社団法人ブルガリアンローズ文化協会への全面的な支援を継続的に実施しております。
      </section>

      <section>
        「ローズウォーターレシピアワード」へ協賛
ブルガリアンローズ文化協会のローズウォーター調味料の普及活動に賛同し、当協会が主催する「ローズウォーターレシピアワード」に、弊社製品を協賛しております。
当イベントでは、ローズウォーターを広く知っていただくために、全国の調理製菓専門学校の学生を対象に、ローズウォーターを使った独創的なレシピを募集し、競い合います。
ファイナリスト6名が参加する最終実技審査では、駐日ブルガリア大使、片岡護シェフ、土屋公二シェフによる厳しい審査が行われます。
これから社会人となる子どもたちは、食のプロである有名シェフの指導を通じて、プロフェッショナルとしての心構えや創意工夫の大切さを学びます。

  ＞レシピアワードの写真を掲載
  ＞一般社団法人ブルガリアンローズ文化協会 公式サイト（リンク）
      </section>

      <section>
        香り創りによる情操教育を実施
「香楽KOUGAKU」とは、癒し（フレグランスセラピー）と教育（フレグランスアート）をテーマにして、代表・山下文江が考案した独自の香り創りメソッドです。
誰にでも楽しめる香り創りの香楽メソッドによって、嗅覚を使った情操教育を実践しています。
2011年より神奈川県立藤沢総合高校で、「香りを通して心を開く」というテーマの特別講座を行っております。
5日間の香楽メソッドプログラムを通じて、子どもたちがそれぞれの個性を発見し、多様な価値観を認め、豊かな感性を育んでいます。

＞高校の授業写真を掲載
      </section>

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  page02_03: state.routes.page02_03,
})

export default connect(mapStateToProps)(Page02_03)
