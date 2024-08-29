import './styles.css';

const FoldableMap = () => {
  return (
    <div className="mx-auto grid aspect-video max-h-[80vh] p-8">
      <div className="grid grid-cols-3 aspect-video h-full w-full bg-[rgba(255, 255, 255,.3)]">
        <div className="map-image"></div>
        <div className="map-image"></div>
        <div className="map-image"></div>
      </div>
    </div>
  );
};

export default FoldableMap;
