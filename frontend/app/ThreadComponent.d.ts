import React from 'react';

export interface ThreadComponentProps {
    threadId: number;
    anonAsUserObject?: boolean;
}

declare const ThreadComponent: React.Component<ThreadComponentProps>

export default ThreadComponent
