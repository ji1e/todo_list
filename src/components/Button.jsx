const Button = ({ clickAddButtonHandler }) => {
  return (
    <button className="todo_button" onClick={clickAddButtonHandler}>
      등록
    </button>
  );
};

export default Button;
