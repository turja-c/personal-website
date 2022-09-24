import ReactMarkdown from 'react-markdown';
import { NormalComponents, SpecialComponents } from '../node_modules/react-markdown/src/ast-to-react.js';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { FunctionComponent } from 'react';

interface IProps {
    content: string;
}

const Markdown: FunctionComponent<IProps> = ({content}) => {
    const components: Partial<NormalComponents & SpecialComponents> = {
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
    
            return (!inline && match) ? (
                <SyntaxHighlighter style={materialLight} PreTag="div" language={match[1]} >{String(children).replace(/\n$/, '')} </SyntaxHighlighter>
            ) : (
                <code className={className ? className : ""} {...props}>
                    {children}
                </code>
            )
        }
    }

	return (
    <div >
		<ReactMarkdown children={content}></ReactMarkdown>
	</div>
    )
}

export default Markdown;