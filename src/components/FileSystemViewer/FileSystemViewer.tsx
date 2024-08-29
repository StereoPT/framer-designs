import FileSystemItem, { Node } from './FileSystemItem';

const nodes: Node[] = [
  {
    name: 'Home',
    nodes: [
      {
        name: 'Movies',
        nodes: [
          {
            name: 'Action',
            nodes: [
              {
                name: '2000s',
                nodes: [
                  { name: 'Gladiator.mp4' },
                  { name: 'American-Beauty.mp4' },
                ],
              },
              { name: '2010s', nodes: [] },
            ],
          },
          { name: 'Comedy', nodes: [{ name: '2000s', nodes: [] }] },
        ],
      },
      {
        name: 'Music',
        nodes: [
          { name: 'Rock', nodes: [] },
          { name: 'Classical', nodes: [] },
        ],
      },
      { name: 'Pictures', nodes: [] },
      { name: 'Documents', nodes: [] },
      { name: 'passwords.txt' },
    ],
  },
];

const FileSystemViewer = () => {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        {nodes.map((node) => {
          return <FileSystemItem node={node} key={node.name} />;
        })}
      </ul>
    </div>
  );
};

export default FileSystemViewer;
