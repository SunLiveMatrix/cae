import { createBoard } from '@wixc3/react-board';
import Card from '../../../components/card/card';
import styles from './card-long-content-test.board.module.scss';

export default createBoard({
    name: 'Card long content test',
    Board: () => (
        <div className={styles.root}>
            <Card>
                <div>
                    <Card.Title>
                        Live in the leading—the spaces in between the rules
                    </Card.Title>
                    <Card.Subtitle>
                        A designer knows he has achieved perfection not when
                        there is nothing left to add, but when there is nothing
                        left to take away
                    </Card.Subtitle>
                </div>
                <Card.Content>
                    <p>
                        Innovators have to be open. They have to be able to
                        imagine things that others cannot and be willing to
                        challenge their own preconceptions. They also need to be
                        conscientious. An innovator who has brilliant ideas but
                        lacks the discipline and persistence to carry them out
                        is merely a dreamer … But crucially, innovators need to
                        be disagreeable … They are people willing to take social
                        risks—to do things that others might disapprove of.
                    </p>
                </Card.Content>
            </Card>
            <Card>
                <div>
                    <Card.Title className={styles.title}>
                        Live in the leading—the spaces in between the rules
                    </Card.Title>
                    <Card.Subtitle>
                        A designer knows he has achieved perfection not when
                        there is nothing left to add, but when there is nothing
                        left to take away
                    </Card.Subtitle>
                </div>
                <Card.Content>
                    <p>
                        Innovators have to be open. They have to be able to
                        imagine things that others cannot and be willing to
                        challenge their own preconceptions. They also need to be
                        conscientious. An innovator who has brilliant ideas but
                        lacks the discipline and persistence to carry them out
                        is merely a dreamer … But crucially, innovators need to
                        be disagreeable … They are people willing to take social
                        risks—to do things that others might disapprove of.
                    </p>
                </Card.Content>
            </Card>
            <Card>
                <div>
                    <Card.Title className={styles.title}>
                        Live in the leading
                    </Card.Title>
                    <Card.Subtitle>
                        A designer knows he has achieved...
                    </Card.Subtitle>
                </div>

                <Card.Content>
                    <p>
                        Innovators have to be open. They have to be able to
                        imagine things that others cannot and be willing to
                        challenge their own preconceptions. They also need to be
                        conscientious. An innovator who has brilliant ideas but
                        lacks the discipline and persistence to carry them out
                        is merely a dreamer … But crucially, innovators need to
                        be disagreeable … They are people willing to take social
                        risks—to do things that others might disapprove of.
                    </p>
                </Card.Content>
            </Card>
        </div>
    ),
    environmentProps: {
        canvasWidth: 1075,
        windowBackgroundColor: '#f1f1f1',
    },
    isSnippet: true,
});
