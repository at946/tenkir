import { NextPage } from 'next';
import TableButton from './tableButton';
import SummaryTags from './summaryTags';
import TableCards from './tableCards';

interface Props {
  openCards: () => void;
  replay: () => void;
  nominate: () => void;
}

const Table: NextPage<Props> = ({ openCards, replay, nominate }) => {
  return (
    <div className='box has-background-success is-shadowless'>
      <div className='mb-5'>
        <TableCards nominate={nominate} />
      </div>
      <div className='mb-4'>
        <SummaryTags />
      </div>
      <TableButton clickOpenButton={openCards} clickReplayButton={replay} />
    </div>
  );
};

export default Table;
