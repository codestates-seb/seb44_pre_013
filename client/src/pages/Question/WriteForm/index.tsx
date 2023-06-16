import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const toolbarOptions = [
  [{ size: ['small', false, 'large', 'huge'] }],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  ['clean'],
];

const modules = {
  toolbar: [...toolbarOptions],
};

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: palegoldenrod;
`;

const WriteForm = () => {
  return <ReactQuill modules={modules} />;
};

export default WriteForm;
