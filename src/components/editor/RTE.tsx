import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller, Control } from 'react-hook-form';

interface RTEProps {
  name: string;
  control: Control<any>;
  label?: string;
  defaultValue?: string;
}

const RTE: React.FC<RTEProps> = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="w-full max-w-full">
      {label && (
        <label className="inline-block mb-1 pl-1 text-gray-800 dark:text-gray-400">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            apiKey="m30gl2jhf28m9uik3zu9bt70y2iwe55aq8k3cresn9dh3g6y"
            onEditorChange={onChange}
            init={{
              height: 500, // Editor height
              width: '100%', // full responsive width
              menubar: true,
              plugins: [
                'image', 'advlist', 'autolink', 'lists', 'link',
                'charmap', 'preview', 'anchor', 'searchreplace',
                'visualblocks', 'code', 'fullscreen', 'insertdatetime',
                'media', 'table', 'help', 'wordcount'
              ],
              toolbar:
                'undo redo | blocks | customImage | bold italic forecolor | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | removeformat | help',

              setup: (editor) => {
                editor.ui.registry.addButton('customImage', {
                  icon: 'image',
                  tooltip: 'Insert image',
                  onAction: () => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';

                    input.onchange = function () {
                      const file = (this as HTMLInputElement).files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = function (e) {
                          const base64 = e.target?.result as string;

                          // Insert image with small width style
                          editor.insertContent(
                            `<img src="${base64}" alt="${file.name}" style="width:300px; max-width:100%; height:auto;" />`
                          );
                        };
                        reader.readAsDataURL(file);
                      }
                    };

                    input.click();
                  }
                });
              },

              content_style: `
                body {
                  font-family:Helvetica,Arial,sans-serif;
                  font-size:14px;
                }
                img {
                  max-width: 100%;
                  height: auto;
                }
              `,
            }}
          />
        )}
      />
    </div>
  );
};

export default RTE;
