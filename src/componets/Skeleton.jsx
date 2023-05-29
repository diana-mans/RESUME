import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = ({ skeletonWidth }) => (
  <ContentLoader
    speed={2}
    width={1300}
    height={200}
    viewBox="0 0 1300 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="9" ry="9" width="70" height="70" />
    <rect x="80" y="0" rx="5" ry="5" width={skeletonWidth} height="30" />
    <rect x="0" y="80" rx="9" ry="9" width="200" height="36" />
    <rect x="80" y="40" rx="5" ry="5" width={skeletonWidth} height="30" />
  </ContentLoader>
);

export default Skeleton;
