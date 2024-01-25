import { createBoard } from '@wixc3/react-board';
import { NewTransaction } from '../../../components/new-transaction/new-transaction';

export default createBoard({
    name: '🧩 New Transaction',
    Board: () => <NewTransaction />,
    isSnippet: true,
});
