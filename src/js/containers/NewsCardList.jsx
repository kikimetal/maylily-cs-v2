import React from "react"
import { connect } from "react-redux"

// containers
import Card from "./Card"

const NewsCardList = props => {

  const { status, data } = props.news

  let fulfilled

  if (status === "fulfilled") {
    fulfilled = (
      <div className="NewsCardList-contents">
        {data.map((row, i) => {

          if (props.pickup && i >= props.pickup) return

          return (
            <Card
              key={"news-data-row-" + i}
              date={row.date}
              heading={{
                main: [row["main-title-01"], row["main-title-02"]],
                sub: row["sub-title"],
              }}
              img={{
                src: row["img-src"],
                alt: row["img-alt"],
                position: "top center",
              }}
              link={Number(row["link-flg"]) ? row["link-href"] : null}
              text={row["description"]}
              />
          )
          {/* TODO: まだ row["description"] をさばけていない。使わないならGSSカラムから消そう。*/}
        })}
      </div>
    )
  }

  const pending = (
    <h2 className="notification pending skeleton-screen-load">
      <span>
        最新のニュースを読み込んでいます。
      </span>
    </h2>
  )
  const rejected = (
    <h2 className="notification rejected error">
      <span>
        サーバーへの通信に失敗したためニュースが読み込めませんでした。
      </span>
    </h2>
  )

  return (
    <div className="NewsCardList">
      {
        status === "fulfilled"
        ? fulfilled
        : status === "pending"
        ? pending
        : rejected
      }
    </div>
  )
}



NewsCardList.defaultProps = {
  pickup: false, // false or Number その数だけ最新のを表示させる
}

const mapStateToProps = state => ({
  news: state.news,
})

export default connect(mapStateToProps)(NewsCardList)
