import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions = [
  [{ size: ['small', false, 'large', 'huge'] }],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  ['clean'],
];

const modules = {
  toolbar: [...toolbarOptions],
};

interface IProps {
  width?: string;
  height?: string;
  value: string;
  handleUpdateProblemContent?: (value: string) => void;
  handleUpdateExpectContent?: (value: string) => void;
}

const Quill = ({
  width,
  height,
  value,
  handleUpdateProblemContent,
  handleUpdateExpectContent,
}: IProps) => {
  return (
    <ReactQuill
      modules={modules}
      style={{
        width: `${width ? width : '50%'}`,
        height: `${height ? height : '13.875rem'}`,
        paddingBottom: '2.5rem',
      }}
      value={value}
      onChange={handleUpdateProblemContent ?? handleUpdateExpectContent}
    />
  );
};

export default Quill;
