import Card from '@material-ui/core/Card';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { OpenInNew } from '@material-ui/icons';

import './styles.css';

interface Props {
  headline: string;
  abstract: string;
  web_url: string;
  lead_paragraph: string;
}

export const SearchCard: React.FC<Props> = ({
  headline,
  abstract,
  web_url,
  lead_paragraph,
}) => {
  return (
    <Card className='search-card-main'>
      <h2 className='search-card-snippet'>{headline}</h2>
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
            <br />
            <a href={web_url} target='_blank' rel='noreferrer'>
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
