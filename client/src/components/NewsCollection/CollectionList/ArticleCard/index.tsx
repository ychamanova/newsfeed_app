import './styles.css';

import Card from '@material-ui/core/Card';

interface Props {
  title: string;
  url: string;
  abstract: string;
}

export const ArticleCard: React.FC<Props> = ({ title, url, abstract }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <div>{abstract}</div>
      <div> Link: {url}</div>
    </Card>
  );
};
