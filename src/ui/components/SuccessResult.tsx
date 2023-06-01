import MDEditor from '@uiw/react-md-editor';

export const SuccessResult = ({ result }: { result: string }) => (
  <MDEditor.Markdown source={result}/>
);
