import './styles.css';

import Card from '@material-ui/core/Card';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { OpenInNew } from '@material-ui/icons';

interface Props {
  title: string;
  url: string;
  abstract: string;
}

export const ArticleCard: React.FC<Props> = ({ title, url, abstract }) => {
  return (
    <Card className='article-card'>
      <h1 className='article-card-title'>{title}</h1>
      <br />
      {abstract}
      <br />
      <Accordion className='article-card-readmore'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href={url} target='_blank' rel='noreferrer'>
              Source: The New York Times. <OpenInNew />
            </a>
          </Typography>
        </AccordionDetails>
        <div></div>
        <div></div>
      </Accordion>
    </Card>
  );
};
