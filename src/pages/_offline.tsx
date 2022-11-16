import { NextPage } from 'next';

const OfflinePage: NextPage = () => (
  <>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any page route will fallback to this page</h2>
  </>
)

export default OfflinePage
