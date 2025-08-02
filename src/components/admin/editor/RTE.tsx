// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import { Controller, Control } from 'react-hook-form';

// interface RTEProps {
//   name: string;
//   control: Control<any>;
//   label?: string;
//   defaultValue?: string;
//   readOnly?: boolean;
//   rules?:any
// }

// const RTE: React.FC<RTEProps> = ({rules, name, control, label, defaultValue = "", readOnly = false }) => {
//   return (
//     <div className="w-full max-w-full">
//       {label && <label className="inline-block mb-1 pl-1 text-gray-800 dark:text-gray-400">{label}</label>}
//       <Controller

//         name={name}
//         control={control}
//         defaultValue={defaultValue}
//         rules={rules}
//         render={({ field: { onChange, value } }) => (
//           <Editor
//             apiKey="m30gl2jhf28m9uik3zu9bt70y2iwe55aq8k3cresn9dh3g6y"
//             value={value}
//             init={{
//               readonly: readOnly,
//               height: 500,
//               width: '100%',
//               branding: false,
//               menubar: !readOnly,
//               toolbar: readOnly
//                 ? false
//                 : `formatselect | blocks | customImage customMedia addCaption | 
//                    bold italic underline | alignleft aligncenter alignright | 
//                    bullist numlist | table | code | removeformat`,
//               plugins: [
//                 'image',
//                 'media',
//                 'lists',
//                 'link',
//                 'code',
//                 'table',
//                 'help',
//                 'wordcount',
//                 'autoresize'
//               ],
//               file_picker_types: 'file image media',
//               media_live_embeds: true,
//               media_url_resolver: function (data, resolve) {
//                 resolve({ html: `<video controls autoplay muted playsinline><source src="${data.url}"></video>` });
//               },
//               setup: (editor) => {
//                 if (readOnly) return;

//                 editor.ui.registry.addButton('customImage', {
//                   icon: 'image',
//                   tooltip: 'Insert image with caption',
//                   onAction: () => {
//                     const input = document.createElement('input');
//                     input.type = 'file';
//                     input.accept = 'image/*';
//                     input.onchange = () => {
//                       const file = input.files?.[0];
//                       if (!file) return;

//                       const blobUrl = URL.createObjectURL(file);
//                       editor.insertContent(`
//                         <figure class="align-center">
//                           <img src="${blobUrl}" alt="${file.name}" data-file="${file.name}" />
//                           <figcaption class="editor-caption" contenteditable="true">Write caption...</figcaption>
//                         </figure>`);
//                     };
//                     input.click();
//                   }
//                 });

//                 editor.ui.registry.addButton('customMedia', {
//                   icon: 'embed',
//                   tooltip: 'Insert video with caption',
//                   onAction: () => {
//                     const input = document.createElement('input');
//                     input.type = 'file';
//                     input.accept = 'video/*';
//                     input.onchange = () => {
//                       const file = input.files?.[0];
//                       if (!file) return;

//                       const blobUrl = URL.createObjectURL(file);
//                       editor.insertContent(`
//                         <figure class="align-center">
//                           <video controls autoplay muted playsinline src="${blobUrl}" data-file="${file.name}"></video>
//                           <figcaption class="editor-caption" contenteditable="true">Video caption...</figcaption>
//                         </figure>`);
//                     };
//                     input.click();
//                   }
//                 });

//                 editor.ui.registry.addButton('addCaption', {
//                   icon: 'quote',
//                   tooltip: 'Add/Edit caption',
//                   onAction: () => {
//                     const selection = editor.selection;
//                     const node = selection.getNode();

//                     const figure = editor.dom.getParent(node, 'figure');
//                     const isCaption = editor.dom.hasClass(node, 'editor-caption') ||
//                       node.tagName.toLowerCase() === 'figcaption';

//                     if (figure) {
//                       let caption = editor.dom.select('figcaption', figure)[0];
//                       if (!caption) {
//                         caption = editor.dom.add(figure, 'figcaption', {
//                           class: 'editor-caption',
//                           contenteditable: 'true'
//                         }, 'Write caption...');
//                       }
//                       selection.select(caption);
//                       selection.collapse(false);
//                     } else if (!isCaption) {
//                       editor.notificationManager.open({
//                         text: 'Please select an image or video first',
//                         type: 'warning'
//                       });
//                     }
//                   }
//                 });

//                 editor.on('click', (e) => {
//                   const target = e.target;
//                   if (target.nodeName === 'IMG' || target.nodeName === 'VIDEO') {
//                     const figure = editor.dom.getParent(target, 'figure');
//                     if (figure) {
//                       const caption = editor.dom.select('figcaption', figure)[0];
//                       if (caption) {
//                         editor.selection.select(caption);
//                         editor.selection.collapse(false);
//                       }
//                     }
//                   }
//                 });

//                 editor.on('keydown', (e) => {
//                   const selection = editor.selection;
//                   const node = selection.getNode();

//                   if (node.classList && node.classList.contains('editor-caption')) {
//                     const range = selection.getRng();
//                     const caption = editor.dom.getParent(node, 'figcaption');
//                     const figure = editor.dom.getParent(caption, 'figure');

//                     if (e.key === 'ArrowDown' && range.endOffset === node.textContent.length) {
//                       e.preventDefault();

//                       const p = editor.dom.create('p', {}, '<br>');
//                       editor.dom.insertAfter(p, figure);
//                       selection.setCursorLocation(p, 0);
//                     }

//                     if (e.key === 'ArrowUp' && range.startOffset === 0) {
//                       e.preventDefault();

//                       const prevElement = figure.previousSibling;
//                       if (prevElement) {
//                         selection.select(prevElement);
//                         selection.collapse(false);
//                       }
//                     }
//                   }
//                 });
//               },
//               block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6',
//               content_style: `
//               body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }
//               figure { margin:1em 0; display: inline-block; }
//                 img { max-width:100%; height:auto; }
//                 video {
//                   max-width: 100%;
//                   height: auto !important;
//                   width: auto !important;
//                 }
//                 .editor-caption { 
//                   display:block; 
//                   text-align:center; 
//                   font-style:italic; 
//                   color:#666; 
//                   margin-top:8px;
//                   font-size: 14px;
//                   padding: 4px 8px;
//                 }
//                 figure.align-left { float: left; margin-right: 15px; }
//                 figure.align-right { float: right; margin-left: 15px; }
//                 figure.align-center { display: block; margin-left: auto; margin-right: auto; text-align: center; }

//                 /* Heading styles inside captions */
//                 .editor-caption h1, .editor-caption h2, .editor-caption h3, 
//                 .editor-caption h4, .editor-caption h5, .editor-caption h6 {
//                   display: inline;
//                   margin: 0;
//                   padding: 0;
//                   font-style: italic;
//                 }
//               `
//             }}
//             onEditorChange={onChange}
//           />
//         )}
//       />
//     </div>
//   );
// };

// export default RTE;

import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller, Control } from 'react-hook-form';

interface RTEProps {
  name: string;
  control: Control<any>;
  label?: string;
  defaultValue?: string;
  readOnly?: boolean;
  rules?: any;
}

const RTE: React.FC<RTEProps> = ({
  rules,
  name,
  control,
  label,
  defaultValue = "",
  readOnly = false
}) => {
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
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey="m30gl2jhf28m9uik3zu9bt70y2iwe55aq8k3cresn9dh3g6y"
            value={value}
            init={{
              readonly: readOnly,
              height: 500,
              width: '100%',
              branding: false,
              menubar: !readOnly,
              toolbar: readOnly
                ? false
                : `formatselect | blocks | customImage customMedia addCaption | 
                   bold italic underline | alignleft aligncenter alignright | 
                   bullist numlist | table | code | removeformat`,
              plugins: [
                'image',
                'media',
                'lists',
                'link',
                'code',
                'table',
                'help',
                'wordcount',
                'autoresize'
              ],
              file_picker_types: 'file image media',
              media_live_embeds: true,
              media_url_resolver: function (data, resolve) {
                resolve({
                  html: `<video controls autoplay muted playsinline><source src="${data.url}"></video>`
                });
              },
              setup: (editor) => {
                if (readOnly) return;

                // Custom Image button
                editor.ui.registry.addButton('customImage', {
                  icon: 'image',
                  tooltip: 'Insert image with caption',
                  onAction: () => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';
                    input.onchange = () => {
                      const file = input.files?.[0];
                      if (!file) return;
                      const blobUrl = URL.createObjectURL(file);
                      editor.insertContent(`
                        <figure class="align-center">
                          <img src="${blobUrl}" alt="${file.name}" data-file="${file.name}" />
                          <figcaption class="editor-caption" contenteditable="true">Write caption...</figcaption>
                        </figure>`);
                    };
                    input.click();
                  }
                });

                // Custom Media button
                editor.ui.registry.addButton('customMedia', {
                  icon: 'embed',
                  tooltip: 'Insert video with caption',
                  onAction: () => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'video/*';
                    input.onchange = () => {
                      const file = input.files?.[0];
                      if (!file) return;
                      const blobUrl = URL.createObjectURL(file);
                      editor.insertContent(`
                        <figure class="align-center">
                          <video controls autoplay muted playsinline src="${blobUrl}" data-file="${file.name}"></video>
                          <figcaption class="editor-caption" contenteditable="true">Video caption...</figcaption>
                        </figure>`);
                    };
                    input.click();
                  }
                });

                // Add/Edit caption button
                editor.ui.registry.addButton('addCaption', {
                  icon: 'quote',
                  tooltip: 'Add/Edit caption',
                  onAction: () => {
                    const selection = editor.selection;
                    const node = selection.getNode();
                    const figure = editor.dom.getParent(node, 'figure');
                    const isCaption =
                      editor.dom.hasClass(node, 'editor-caption') ||
                      node.tagName.toLowerCase() === 'figcaption';

                    if (figure) {
                      let caption = editor.dom.select('figcaption', figure)[0];
                      if (!caption) {
                        caption = editor.dom.add(
                          figure,
                          'figcaption',
                          {
                            class: 'editor-caption',
                            contenteditable: 'true'
                          },
                          'Write caption...'
                        );
                      }
                      selection.select(caption);
                      selection.collapse(false);
                    } else if (!isCaption) {
                      editor.notificationManager.open({
                        text: 'Please select an image or video first',
                        type: 'warning'
                      });
                    }
                  }
                });

                // Click on image/video jumps to its caption
                editor.on('click', (e) => {
                  const target = e.target;
                  if (target.nodeName === 'IMG' || target.nodeName === 'VIDEO') {
                    const figure = editor.dom.getParent(target, 'figure');
                    if (figure) {
                      const caption = editor.dom.select('figcaption', figure)[0];
                      if (caption) {
                        editor.selection.select(caption);
                        editor.selection.collapse(false);
                      }
                    }
                  }
                });

                // Caption arrow-key navigation
                editor.on('keydown', (e) => {
                  const selection = editor.selection;
                  const node = selection.getNode();

                  if (node.classList && node.classList.contains('editor-caption')) {
                    const range = selection.getRng();
                    const caption = editor.dom.getParent(node, 'figcaption');
                    const figure = editor.dom.getParent(caption, 'figure');

                    if (e.key === 'ArrowDown' && range.endOffset === node.textContent.length) {
                      e.preventDefault();
                      const p = editor.dom.create('p', {}, '<br>');
                      editor.dom.insertAfter(p, figure);
                      selection.setCursorLocation(p, 0);
                    }

                    if (e.key === 'ArrowUp' && range.startOffset === 0) {
                      e.preventDefault();
                      const prevElement = figure.previousSibling;
                      if (prevElement) {
                        selection.select(prevElement);
                        selection.collapse(false);
                      }
                    }
                  }
                });

                // 🛠️ FIX: જ્યારે figure માં img/video ગાયબ થાય, ત્યારે આખું <figure> (caption સહિત) ઝટપટ રિમૂવ કરો
                const removeEmptyFigures = () => {
                  editor.dom.select('figure').forEach((fig) => {
                    if (!fig.querySelector('img') && !fig.querySelector('video')) {
                      editor.dom.remove(fig);
                    }
                  });
                };
                // ચાર्ज અને કীবોર્ડ અપડેટ પછી ચેક કરો
                editor.on('change keyup', removeEmptyFigures);
              },
              block_formats:
                'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6',
              content_style: `
                body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }
                figure { margin:1em 0; display: inline-block; }
                img { max-width:100%; height:auto; }
                video {
                  max-width: 100%;
                  height: auto !important;
                  width: auto !important;
                }
                .editor-caption { 
                  display:block; 
                  text-align:center; 
                  font-style:italic; 
                  color:#666; 
                  margin-top:8px;
                  font-size: 14px;
                  padding: 4px 8px;
                }
                figure.align-left { float: left; margin-right: 15px; }
                figure.align-right { float: right; margin-left: 15px; }
                figure.align-center { display: block; margin-left: auto; margin-right: auto; text-align: center; }
              `
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default RTE;
