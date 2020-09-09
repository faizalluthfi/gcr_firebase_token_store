# Google Cloud Run application to Create Firebase Custom Token

Use the command to build image and deploy:

```
export TAG=gcr.io/$GOOGLE_CLOUD_PROJECT/gcr_firebase_token_store
export REGION=asia-southeast1
export SERVICE_ACCOUNT=custom-service-account@$GOOGLE_CLOUD_PROJECT.iam.gserviceaccount.com

gcloud builds submit --tag $TAG
gcloud run deploy gcr-firebase-token-store \
    --image $TAG --platform managed \
    --region $REGION \
    --service-account $SERVICE_ACCOUNT
```