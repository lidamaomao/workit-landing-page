import { Introduction } from "./Introduction";
import { articles } from "../data";

const Articles = () => {
  return (
    <ul className="articles lg:flex">
      {articles.map((article) => {
        return (
          <li className="mb-10 lg:mr-4 last:mr-0">
            <Introduction {...article} />
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
