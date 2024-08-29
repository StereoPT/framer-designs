import Folder, { FolderType } from './Folder';

const folders: FolderType[] = [
  {
    name: 'Home',
    folders: [
      {
        name: 'Movies',
        folders: [
          {
            name: 'Action',
            folders: [
              { name: '2000s', folders: [{ name: 'Popular' }] },
              { name: '2010s' },
            ],
          },
          { name: 'Comedy', folders: [{ name: '2000s' }] },
        ],
      },
      { name: 'Music', folders: [{ name: 'Rock' }, { name: 'Classical' }] },
      { name: 'Pictures' },
      { name: 'Documents' },
    ],
  },
];

const FileSystemViewer = () => {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        {folders.map((folder) => {
          return <Folder folder={folder} key={folder.name} />;
        })}
      </ul>
    </div>
  );
};

export default FileSystemViewer;
