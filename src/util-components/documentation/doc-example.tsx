import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './doc-example.module.scss';

export interface DocExampleProps {
    className?: string;
    children: ReactNode;
    description?: ReactNode;
}

export const DocExample = ({
    className,
    children,
    description,
}: DocExampleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>{children}</div>
            {description && (
                <div className={styles.description}>{description}</div>
            )}
        </div>
    );
};
