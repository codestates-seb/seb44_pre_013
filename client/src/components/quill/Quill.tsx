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

interface TypeProps {
  width?: string;
  height?: string;
}

const Quill = ({ width, height }: TypeProps) => {
  return (
    <ReactQuill
      modules={modules}
      style={{
        width: `${width ? width : '50%'}`,
        height: `${height ? height : '13.875rem'}`,
        paddingBottom: '2.5rem',
      }}
    />
  );
};

export default Quill;
