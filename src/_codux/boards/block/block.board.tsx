import { createBoard } from '@wixc3/react-board';
import Block from '../../../components/block/block';

export default createBoard({
    name: 'Block',
    Board: () => (
        <Block>
            <Block.Title>Block title</Block.Title>
            <Block.Content>
                <p>
                    To design is much more than simply to assemble, to order, or
                    even to edit: it is to add value and meaning, to illuminate,
                    to simplify, to clarify, to modify, to dignify, to
                    dramatize, to persuade, and perhaps even to amuse. To design
                    is to transform prose into poetry.
                </p>
            </Block.Content>
        </Block>
    ),
    environmentProps: {
        canvasWidth: 679,
        windowBackgroundColor: '#f1f1f1',
    },
    isSnippet: true,
});
