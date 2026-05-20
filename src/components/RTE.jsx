import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import conf from '../conf/conf.js'; 

const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className='w-full'> 
      {label && (
        <label className='inline-block mb-2 pl-1 text-sm font-medium text-stone-700 font-sans'>
          {label}
        </label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <div className="rounded-xl overflow-hidden border border-stone-200/80 shadow-sm focus-within:border-rose-700/50 focus-within:ring-4 focus-within:ring-rose-700/5 transition-all duration-200">
            <Editor
              apiKey={conf.tinyMceApiKey}
              initialValue={defaultValue}
              init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                  "image", "advlist", "autolink", "lists", "link", "charmap",
                  "preview", "anchor", "searchreplace", "visualblocks", "code",
                  "fullscreen", "insertdatetime", "media", "table", "help", "wordcount"
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                content_style: "body { font-family: 'Georgia', 'Arial', sans-serif; font-size: 16px; color: #1c1917; line-height: 1.6; padding: 1rem; }",
                skin: "oxide",
                content_css: "default"
              }}
              onEditorChange={onChange}
            />
          </div>
        )}
      />
    </div>
  )
}

export default RTE