import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';
import { Doc } from '../../../util-components/documentation/doc';
import { DocHeader } from '../../../util-components/documentation/doc-header';
import { DocSection } from '../../../util-components/documentation/doc-section';
import styles from './button.board.module.scss';

export default createBoard({
    name: '📒 Button',
    Board: () => {
        return (
            <Doc>
                <DocHeader title="Button" />
                <DocSection title="Simple Button">
                    <Button>Call to Action</Button>
                </DocSection>
                <DocSection
                    title="Complex button"
                    description={
                        <div>
                            Passing ReactNode via <code>children</code> prop
                        </div>
                    }
                >
                    <Button className={styles.button}>
                        <div>Call to Action</div>
                        <div className={styles.description}>
                            Explain what is going to happen
                        </div>
                    </Button>
                </DocSection>
                <DocSection
                    title="Customizing Button Styles"
                    description={
                        <div>
                            Passing custom <code>className</code>
                            <ol>
                                <li>Custom color – success</li>
                                <li>Custom shape – pill</li>
                                <li>Custom style – outline</li>
                            </ol>
                        </div>
                    }
                    contentLayout="inline"
                >
                    <Button className={styles.customButtonColor}>
                        Call to Action
                    </Button>
                    <Button className={styles.customButtonShape}>
                        Call to Action
                    </Button>
                    <Button className={styles.customButtonStyle}>
                        Call to Action
                    </Button>
                </DocSection>
            </Doc>
        );
    },
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
        },
    },
    isSnippet: true,
});
