// 카드 부분
const Card = ({ item, removeFunction, completeFunction }) => {
  return (
    <div className="todo_card">
      <div key={item.id} className="contents">
        <h4>{item.title}</h4>
        <p>{item.content}</p>
        <div className="buttons">
          <button
            className="buttons_delete button"
            onClick={() => removeFunction(item.id)}
          >
            삭제
          </button>
          <button
            className="buttons_complete button"
            onClick={() => completeFunction(item.id)}
          >
            {item.isDone ? "취소" : "완료"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
