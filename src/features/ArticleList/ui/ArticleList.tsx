import { PostCard } from 'shared/features/Article/ArticleCard';
import { Article } from 'shared/types/article';
import s from './articleList.module.css';

type ArticleListProps = {
  articles: Article[];
};

export const ArticleList = ({ articles }: ArticleListProps) => {
  // const [articles, setArticles] = useState(mockPosts);
  // console.log('render ArticleList');

  return (
    <div className={s.container}>
      {articles.map((article, index) => (
        <PostCard postData={article} key={index} />
      ))}
    </div>
  );
};
