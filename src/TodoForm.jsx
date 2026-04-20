function TodoForm() {
  return (
    <form>
      Todo
      <label htmlFor="todoTitle"></label>
      <input type="text" id="todoTitle" />
      <button type="submit" disabled>Add Todo</button>
    </form>
  );
}

export default TodoForm;
