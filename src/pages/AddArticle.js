import FormTextArea from "../components/global/FormTextArea";
import FormTextInput from "../components/global/FormTextInput";
import FormButton from "../components/global/FormButton";
import "../style/home-page/page.scss";
import "../style/add-article.scss";
import "../style/global/form-button.scss";
import "../style/global/form-text-input.scss";
import { useState } from "react";

function AddArticle() {
  const [article, setArticle] = useState({
    doi_number: "",
    article_theme: "",
    authors: "",
    sources: "",
    summary: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setArticle({ ...article, [name]: value });
  };

  return (
    <div className="page">
      <div className="home-page-theme">
        <h1>Formularz dodawania artykułu</h1>
        <div className="add-article-page">
          <FormTextInput
            title="Numer Doi"
            type="text"
            name="doi_number"
            placeholder="10.1000.10/123456"
            value={article.doi_number}
            onChange={handleInput}
          />
          <FormTextInput
            title="Tytuł artykułu"
            type="text"
            name="article_theme"
            //placeholder=""
            value={article.article_theme}
            onChange={handleInput}
          />
          <FormTextInput
            title="Autorzy"
            type="text"
            name="authors"
            placeholder="Jan Kowalski, Adam Nowak"
            value={article.authors}
            onChange={handleInput}
          />
          <FormTextInput
            title="Źródła"
            type="text"
            name="sources"
            //placeholder=""
            value={article.sources}
            onChange={handleInput}
          />
          <FormTextArea
            title="Opis artykułu"
            type="text"
            name="summary"
            //placeholder=""
            value={article.summary}
            onChange={handleInput}
          />
          {/* TO DO dodać Navlink do podstrony Account */}
          <FormButton title="Prześlij" />
        </div>
      </div>
    </div>
  );
}

export default AddArticle;
