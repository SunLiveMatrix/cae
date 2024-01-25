import { createBoard } from '@wixc3/react-board';
import Block from '../../../components/block/block';

export default createBoard({
    name: 'Block with subtitle',
    Board: () => (
        <Block>
            <div>
                <Block.Title>Block with subtitle</Block.Title>
                <Block.Subtitle>
                    This subtitle provides context for the content of the Block
                </Block.Subtitle>
            </div>

            <Block.Content>
                <p>
                    Innovators have to be open. They have to be able to imagine
                    things that others cannot and be willing to challenge their
                    own preconceptions. They also need to be conscientious. An
                    innovator who has brilliant ideas but lacks the discipline
                    and persistence to carry them out is merely a dreamer … But
                    crucially, innovators need to be disagreeable … They are
                    people willing to take social risks—to do things that others
                    might disapprove of.
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
