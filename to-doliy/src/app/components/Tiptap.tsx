'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Placeholder from '@tiptap/extension-placeholder';

import { useEffect } from 'react';

interface TiptapProps {
  content: string;
  onContentChange: (newContent: string) => void;
}

const Tiptap = ({ content, onContentChange }: TiptapProps) => {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Placeholder.configure({
        placeholder: "Write your thoughts here...",
      }),
    ],

    content,

    editorProps: {
      attributes: {
        class:
          "bg-[#FDFF9E] text-heading text-sm rounded-base block w-full h-64 p-5 shadow-xs resize-y focus:outline-none",
      },
    },

    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },

    immediatelyRender: false,
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) return null;

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded bg-[#FDFF9E] hover:bg-gray-300 ${
            editor.isActive('bold') ? 'bg-gray-400' : ''
          }`}
        >
          Bold
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;