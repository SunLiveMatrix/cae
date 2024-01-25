import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/sidebar/sidebar';

export default createBoard({
    name: 'Sidebar',
    Board: () => <Sidebar />,
    isSnippet: true,
});
