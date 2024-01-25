import { createBoard } from '@wixc3/react-board';
import { Goals } from '../../../components/goals/goals';

export default createBoard({
    name: '🧩 Goals Section',
    Board: () => <Goals />,
    environmentProps: {
        canvasWidth: 874,
    },
    isSnippet: true,
});
