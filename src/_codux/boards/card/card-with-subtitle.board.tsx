import { createBoard } from '@wixc3/react-board';
import Card from '../../../components/card/card';

export default createBoard({
    name: 'Card with subtitle',
    Board: () => (
        <Card>
            <div>
                <Card.Title>Card with subtitle</Card.Title>
                <Card.Subtitle>
                    This subtitle provides context for the content of the card
                </Card.Subtitle>
            </div>

            <Card.Content>
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
            </Card.Content>
        </Card>
    ),
    environmentProps: {
        canvasWidth: 679,
        windowBackgroundColor: '#f1f1f1',
    },
    isSnippet: true,
});
