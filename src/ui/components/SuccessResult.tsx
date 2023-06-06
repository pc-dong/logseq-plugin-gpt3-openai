import MarkdownPreview from '@uiw/react-markdown-preview';

export const SuccessResult = ({ result }: { result: string }) => (
  <div className = "overflow-auto max-h-80">
    <MarkdownPreview source={result} />
  </div>
);
