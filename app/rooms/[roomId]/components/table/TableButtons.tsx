import { NextPage } from 'next';

// components
import Button from '@/app/components/common/Button';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faHandsPraying, faReply } from '@fortawesome/free-solid-svg-icons';

// interface
import { IFRoom } from '@/interfaces/room';
import { IFTableCard } from '@/interfaces/tableCard';

// recoil
import { useRecoilValue } from 'recoil';

// utils
import getTableCardsFromUsers from '../../utils/getTableCardsFromUsers';
import roomState from '@/recoil/atoms/roomAtom';

interface Props {
  clickOpenButton: () => void;
  clickRequestToSelectButton: () => void;
  clickReplayButton: () => void;
}

const TableButtons: NextPage<Props> = ({
  clickOpenButton,
  clickRequestToSelectButton,
  clickReplayButton,
}) => {
  const room: IFRoom = useRecoilValue(roomState);
  const tableCards: IFTableCard[] = getTableCardsFromUsers(room.users);
  const isEveryoneSelectedCard: boolean = !tableCards.find(
    (tableCard: IFTableCard) => tableCard.value === null,
  );
  const isOpenButtonDisabled: boolean =
    tableCards.filter((tableCard: IFTableCard) => tableCard.value !== null).length === 0;

  return (
    <div>
      {room.isOpenPhase ? (
        <Button onClick={clickReplayButton}>
          <FontAwesomeIcon icon={faReply} className='mr-2' />
          <span>もう一度</span>
        </Button>
      ) : (
        <>
          <Button disabled={isOpenButtonDisabled} extraClass='mr-2' onClick={clickOpenButton}>
            <FontAwesomeIcon icon={faHand} className='mr-2' />
            <span>開く</span>
          </Button>
          <Button
            isOutlined={true}
            disabled={isEveryoneSelectedCard}
            onClick={clickRequestToSelectButton}
          >
            <FontAwesomeIcon icon={faHandsPraying} className='mr-2' />
            <span>早く選んで</span>
          </Button>
        </>
      )}
    </div>
  );
};
export default TableButtons;
