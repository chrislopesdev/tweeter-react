function TweetForm() {
  const placeHolderText = 'What are you humming about?';
  const preventDefault = (e) => e.preventDefault();

  return (
    <section className="newtweet">
    <form method="post" action="/tweets" className="newtweet__form" onSubmit={preventDefault} >
      <textarea className="form__textarea" name="text" placeholder={placeHolderText}></textarea>
      <input type="submit" value="Tweet" className="form__input" />
      <span className="form__counter">140</span>
    </form>
  </section>
  );
}

export default TweetForm;