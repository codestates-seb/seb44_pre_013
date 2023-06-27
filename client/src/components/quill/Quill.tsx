import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions = [
  [{ size: ['small', false, 'large', 'huge'] }],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  ['code-block'],
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
  onChange?: (value: string) => void;
  handleUpdateProblemContent?: (value: string) => void;
  handleUpdateExpectContent?: (value: string) => void;
}

const Quill = ({
  width,
  height,
  value,
  onChange,
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
        backgroundColor: '#fff',
      }}
      value={value}
      onChange={handleUpdateProblemContent ?? handleUpdateExpectContent ?? onChange}
    />
  );
};

export default Quill;
