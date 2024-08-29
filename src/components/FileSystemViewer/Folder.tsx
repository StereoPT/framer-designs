import { FiFolder } from 'react-icons/fi';

export type FolderType = {
  name: string;
  folders?: FolderType[];
};

type FolderProps = { folder: FolderType };

const Folder = ({ folder }: FolderProps) => {
  return (
    <li key={folder.name} className="my-1.5">
      <span className="flex items-center gap-1.5">
        <FiFolder className="size-6 text-sky-500" />
        {folder.name}
      </span>

      <ul className="pl-6">
        {folder.folders?.map((folder) => {
          return <Folder key={folder.name} folder={folder} />;
        })}
      </ul>
    </li>
  );
};

export default Folder;
