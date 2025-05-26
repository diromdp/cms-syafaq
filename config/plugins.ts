module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: '887W85T4NNXA56270NYC',
                secretAccessKey: '7WmqbwJTfyB2aFBWeDxlQiym58XlBCeA0DM0GiZD',
                region: 'sgp1',
                endpoint: 'https://sgp1.vultrobjects.com',
                params: {
                    Bucket: 'testimoni',
                    ACL: 'public-read',
                    signatureVersion: 'v4',
                    Key: (filename) => `Assets-strapi/${filename}`
                },
                forcePathStyle: true,
                credentials: {
                    accessKeyId: '887W85T4NNXA56270NYC',
                    secretAccessKey: '7WmqbwJTfyB2aFBWeDxlQiym58XlBCeA0DM0GiZD'
                }
            },
            actionOptions: {
                upload: {
                    ACL: 'public-read'
                },
                uploadStream: {
                    ACL: 'public-read'
                }
            }
        },
    },
    // ...
});