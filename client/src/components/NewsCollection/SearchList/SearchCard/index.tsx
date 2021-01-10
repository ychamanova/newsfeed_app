import Card from '@material-ui/core/Card';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { OpenInNew } from '@material-ui/icons';

import './styles.css';

interface Props {
  abstract: string;
  snippet: string;
  web_url: string;
  lead_paragraph: string;
}

export const SearchCard: React.FC<Props> = ({
  abstract,
  snippet,
  web_url,
  lead_paragraph,
}) => {
  return (
    <Card className='search-card-main'>
      <h1>{snippet}</h1>
      <br />
      {abstract}
      <br />
      <Accordion className='search-card-readmore'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {lead_paragraph}
            <a href={web_url} target='_blank' rel='noreferrer'>
              Source: New York Times. <OpenInNew />
            </a>
          </Typography>
        </AccordionDetails>
        <div></div>
        <div></div>
      </Accordion>
    </Card>
  );
};
