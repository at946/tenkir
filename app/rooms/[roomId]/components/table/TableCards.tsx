import { NextPage } from 'next';

// components
import TableCard from './TableCard';
import Button from '@/app/components/common/Button';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

// interfaces
import { IFTableCard } from '@/interfaces/tableCard';
import { IFRoom } from '@/interfaces/room';

// recoil
import { useRecoilValue } from 'recoil';
import roomState from '@/recoil/atoms/roomAtom';

// utils
import getTableCardsFromUsers from '../../utils/getTableCardsFromUsers';

interface Props {
  nominate: (userId: string) => void;
}

const TableCards: NextPage<Props> = ({ nominate }) => {
  const room: IFRoom = useRecoilValue(roomState);
  const tableCards: IFTableCard[] = getTableCardsFromUsers(room.users);

  return (
    <div className='mb-5 flex flex-wrap justify-center gap-4'>
      {tableCards.map((tableCard: IFTableCard) => {
        const isTableCardBlank: boolean = tableCard.value === null;

        return (
          <div key={tableCard.userId} role='group' aria-label='テーブルカードグループ'>
            <div className='mb-2 flex justify-center'>
              <TableCard value={tableCard.value} isOpen={room.isOpenPhase} />
            </div>

            <div className='text-center'>
              <Button
                isOutlined={true}
                disabled={!room.isOpenPhase || isTableCardBlank}
                onClick={() => nominate(tableCard.userId)}
              >
                <FontAwesomeIcon icon={faComment} className='mr-2' />
                <span>指名</span>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TableCards;
