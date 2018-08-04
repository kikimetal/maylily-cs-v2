import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Card from "./Card"
import Footer from "./Footer"

const Page02_02 = props => {

  const { heading } = props.page02_02

  return (
    <div className="Page02_02 page">

      <Heading main={heading.main} sub={heading.sub} />

    <section>
      会社概要
社名      	有限会社メイリリィ
代表者　	代表取締役社長  山下文江
設立     	1999年1月18日
所在地    	[本社]
　　　　	〒224-0032　神奈川県横浜市都筑区茅ヶ崎中央3-1　ユニゾセンター南ビル1F
　	TEL 045-530-4872（代表） FAX 045-530-4873
　	[化粧品工場]
〒223-0057　神奈川県横浜市港北区新羽町1381
事業内容　	◆オリジナルブランド事業
　　　　	ローズダレーナ（化粧品・健康食品・飲料）製造、販売
　	ガーメント（化粧品）製造、販売
◆ブルガリアンローズ原料事業
　	ダマスクローズウォーター・ローズオイルの輸入、販売
◆フレグランス受託製造事業
　	化粧品・フレグランス関連製品の受託製造
	フレグランスデザイン及び調合香料の販売
◆山下文江フレグランスアート＆セラピーアカデミーの運営
    </section>

    <section>
      沿革
1996年  　　    サロン・ド・メイリリィ主宰
1999年1月     	有限会社メイリリィ設立
2004年4月     	化粧品製造業許可取得
2004年4月     	化粧品製造販売業許可取得
2016年5月     	有機JAS認定取得（輸入業者）
2016年6月     	Rose Darena発売
2016年11月  	GARMENT発売
    </section>

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  page02_02: state.routes.page02_02,
})

export default connect(mapStateToProps)(Page02_02)
