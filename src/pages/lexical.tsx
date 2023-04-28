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
import { EditorState, LexicalEditor } from 'lexical';
import { MyCustomAutoFocusPlugin } from '../components/MyCustomAutoFocusPlugin';
import { useRef } from 'react';

const initialConfig: InitialConfigType = {
  namespace: 'MyEditor',
  onError(error: Error) {
    console.log(error);
  },
};

const LexicalPage: NextPage = () => {
  const editorRef = useRef<LexicalEditor | null>(null);

  const onChange = (_: EditorState, editor: LexicalEditor) => {
    editorRef.current = editor;
  };

  const onClick = () => {
    if (editorRef.current) {
      const editorState = editorRef.current.getEditorState();
      console.log(editorState.toJSON());
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
