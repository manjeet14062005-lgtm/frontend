function Form({ onSubmit }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit("submitted");
    }}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;