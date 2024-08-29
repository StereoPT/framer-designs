import { FiFolder } from 'react-icons/fi';

const FileSystemViewer = () => {
  const folders = [
    {
      name: 'Movies',
      folders: [
        { name: 'Action', folders: [{ name: '2000s' }, { name: '2010s' }] },
        { name: 'Comedy' },
      ],
    },
    { name: 'Music', folders: [{ name: 'Rock' }, { name: 'Classical' }] },
    { name: 'Pictures' },
    { name: 'Documents' },
  ];

  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        <li className="my-1.5">
          <span className="flex items-center gap-1.5">
            <FiFolder className="size-6 text-sky-500" />
            Home
          </span>
          <ul className="pl-6">
            {folders.map((folder) => {
              return (
                <li key={folder.name} className="my-1.5">
                  <span className="flex items-center gap-1.5">
                    <FiFolder className="size-6 text-sky-500" />
                    {folder.name}
                  </span>

                  <ul className="pl-6">
                    {folder.folders?.map((folder) => {
                      return (
                        <li key={folder.name} className="my-1.5">
                          <span className="flex items-center gap-1.5">
                            <FiFolder className="size-6 text-sky-500" />
                            {folder.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FileSystemViewer;
