const getEnvVar = (name: string): string => {
    const unvalidatedEnvVar = process.env[name];
    console.log('v:',unvalidatedEnvVar)
    if (!unvalidatedEnvVar) {
        throw new Error(
            `Couldn't find environment variable: ${name}`
        );
    } else {
        return unvalidatedEnvVar;
    }
};

export default {
    //env: getEnvVar('NODE_ENV'),
    // nextAuthSecret: getEnvVar('NEXTAUTH_SECRET'),
    // graphqlUrl: getEnvVar('NEXT_PUBLIC_GRAPHQL_URL')
}
