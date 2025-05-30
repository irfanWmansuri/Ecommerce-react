import { Editor } from '@tinymce/tinymce-react';

export default function AdvancedEditor({ value, onChange }) {
  return (
    <Editor
      initialValue={value}
      apiKey="z06n81klddcs6z2utcoffpyxrk38bca2xzi2ha82a47ebidz"
      init={{
        height: 200,
        menubar: false,
        plugins: ['lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'wordcount', 'code'],
        toolbar: 'undo redo | bold italic underline | blocks fontfamily fontsize | alignleft aligncenter alignright | code',

        content_style: `
      body {
        background-color: #1F2937;
        color:#9CA3AF;
        font-size:15px;
      }
    `
      }}
      
      onEditorChange={(content) => onChange(content)}

    />
  );
}
