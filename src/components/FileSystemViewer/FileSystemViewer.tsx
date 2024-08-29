import { FiFolder } from 'react-icons/fi';

const FileSystemViewer = () => {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        <li className="my-1.5">
          <span className="flex items-center gap-1.5">
            <FiFolder className="size-6 text-sky-500" />
            Home
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FileSystemViewer;
