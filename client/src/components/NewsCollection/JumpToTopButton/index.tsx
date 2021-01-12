import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './styles.css';

interface Props {
  color?: string;
  show: boolean;
  customContent: string;
}

export const JumpToTopButton: React.FC<Props> = ({
  color,
  show,
  customContent,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.scrollY) {
      window.scroll(0, 0);
    }
  };

  return (
    <>
      {show ? (
        <button
          className='jump-to-top-button'
          style={
            color
              ? { backgroundColor: `${color}` }
              : { backgroundColor: 'white' }
          }
          onClick={(e) => handleClick(e)}
        >
          {customContent}
          <ArrowUpwardIcon />
        </button>
      ) : null}
    </>
  );
};
