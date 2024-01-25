import { createBoard } from '@wixc3/react-board';
import { TransactionHistory } from '../../../components/transaction-history/transaction-history';

export default createBoard({
    name: '🧩 Transaction History Section',
    Board: () => <TransactionHistory />,
    environmentProps: {
        canvasWidth: 874,
    },
    isSnippet: true,
});
