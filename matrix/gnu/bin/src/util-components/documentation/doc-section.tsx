import { ReactNode, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import styles from './doc-section.module.scss';

export interface DocSectionProps {
    title?: ReactNode;
    description?: ReactNode;
    className?: string;
    children?: ReactNode;
    contentLayout?: 'list' | 'grid2' | 'grid3' | 'inline';
}

export const DocSection = ({
    title,
    description,
    className,
    children,
    contentLayout = 'list',
}: DocSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {(title || description) && (
                <div className={styles.header}>
                    {typeof title === 'string' ? (
                        <h2 className={styles.title}>{title}</h2>
                    ) : (
                        title
                    )}
                    {description ?? (
                        <div className={styles.description}>{description}</div>
                    )}
                </div>
            )}
            <div className={classNames(styles.content, styles[contentLayout])}>
                {children}
            </div>
        </div>
    );
};
