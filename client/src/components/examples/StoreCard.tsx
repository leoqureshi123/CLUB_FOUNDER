import StoreCard from '../StoreCard';

export default function StoreCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <StoreCard
        name="BQ Watches"
        url="https://www.bqwatches.com"
        category="Watches"
        imageType="watches"
        index={0}
      />
    </div>
  );
}
