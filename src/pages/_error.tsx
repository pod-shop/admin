import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next';

const ErrorPage: NextPage = ({ statusCode }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
  const statusCode = res ? res.statusCode : req.statusCode ? req.statusCode : 404;

  return {
    props: {
      statusCode
    }
  };
}

export default ErrorPage;
