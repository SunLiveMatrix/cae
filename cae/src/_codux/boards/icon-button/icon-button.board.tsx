import { createBoard } from '@wixc3/react-board';
import { IconButton } from '../../../components/icon-button/icon-button';

export default createBoard({
    name: 'Icon Button',
    Board: () => <IconButton glyph="add" />,
    isSnippet: true,
});
