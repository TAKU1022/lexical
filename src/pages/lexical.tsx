import { Box, Button } from '@chakra-ui/react';
import { NextPage } from 'next';
import {
  InitialConfigType,
  LexicalComposer,
} from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { EditorState } from 'lexical';
import { MyCustomAutoFocusPlugin } from '../components/MyCustomAutoFocusPlugin';
import { useRef } from 'react';

const initialConfig: InitialConfigType = {
  namespace: 'MyEditor',
  onError(error: Error) {
    console.log(error);
  },
};

const LexicalPage: NextPage = () => {
  const editorStateRef = useRef<EditorState | null>(null);

  const onChange = (editorState: EditorState) => {
    editorStateRef.current = editorState;
  };

  const onClick = () => {
    if (editorStateRef.current) {
      console.log(JSON.stringify(editorStateRef.current));
    }
  };

  return (
    <Box px={4} py={4}>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <MyCustomAutoFocusPlugin />
      </LexicalComposer>
      <Button mt={6} onClick={onClick}>
        check
      </Button>
    </Box>
  );
};

export default LexicalPage;
