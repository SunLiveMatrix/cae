import { createBoard } from '@wixc3/react-board';
import { OutcomeStatistics } from '../../../components/outcome-statistics/outcome-statistics';

export default createBoard({
    name: '🧩 Outcome Statistics Section',
    Board: () => <OutcomeStatistics />,
    environmentProps: {
        canvasWidth: 874,
    },
    isSnippet: true,
});
