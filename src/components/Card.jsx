import { Link } from "react-router-dom";

// 투두리스트 카드
const Card = ({ item, removeFunction, completeFunction }) => {
  return (
    <div className="todo_card">
      {/* 카드 안 제목과 내용 */}
      <div key={item.id} className="contents">
        <Link to={`/${item.id}`} item={item}>
          상세보기
        </Link>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
        <div className="buttons">
          {/* 취소/완료 버튼 */}
          <button
            className="buttons_complete button"
            onClick={() => completeFunction(item.id)}
          >
            {item.isDone ? "취소" : "완료"}
          </button>
          {/* 삭제 버튼 */}
          <button
            className="buttons_delete button"
            onClick={() => removeFunction(item.id)}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
