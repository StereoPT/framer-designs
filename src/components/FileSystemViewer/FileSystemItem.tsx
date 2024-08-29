'use client';

import { useState } from 'react';
import { FiChevronRight, FiFile, FiFolder } from 'react-icons/fi';

export type Node = {
  name: string;
  nodes?: Node[];
};

type FileSystemItemProps = { node: Node };

const FileSystemItem = ({ node }: FileSystemItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li key={node.name} className="my-1.5">
      <span className="flex items-center gap-1.5">
        {node.nodes && node.nodes.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <FiChevronRight
              className={`size-4 text-gray-500 ${isOpen ? 'rotate-90' : ''}`}
            />
          </button>
        )}

        {node.nodes ? (
          <FiFolder
            className={`size-6 text-sky-500 ${
              node.nodes.length <= 0 ? 'ml-[22px]' : ''
            }`}
          />
        ) : (
          <FiFile className="ml-[22px] size-6 text-gray-900" />
        )}

        {node.name}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {node.nodes?.map((node) => {
            return <FileSystemItem key={node.name} node={node} />;
          })}
        </ul>
      )}
    </li>
  );
};

export default FileSystemItem;
