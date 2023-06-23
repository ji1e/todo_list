import React from "react";
import "../App.css";
import { Link, useParams } from "react-router-dom";

function Detail(item) {
  const params = useParams();
  return (
    <div className="detail_body">
      <div className="detail_box">
        {/* 박스 안 제목과 내용 */}
        <div className="detail_contents">
          <span>id : {params.id}</span>
          <h4>{item.title}</h4>
          <p>content</p>
          <button className="detail_button">이전으로</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
