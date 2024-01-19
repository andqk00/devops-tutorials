import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

class DevOpsTutorialL3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    new Bucket(this, id, {
      lifecycleRules: [{
        expiration: cdk.Duration.days(expiration)
      }]
    });
  }
}

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket in 3 ways of CDK Construct (L1, L2, L3):
    
    // L1
    new CfnBucket(this, 'devops-tutorial-cdk-l1-bucket', {
      lifecycleConfiguration: {
        rules: [{
          expirationInDays: 1,
          status: 'Enabled'
        }]
      }
    });

    const duration = new cdk.CfnParameter(this, 'duration', {
      default: 3,
      minValue: 1,
      maxValue: 6,
      type: 'Number'
    });

    // L2
    const l2Bucket = new Bucket(this, 'devops-tutorial-cdk-l2-bucket', {
      lifecycleRules: [{
        expiration: cdk.Duration.days(duration.valueAsNumber)
      }],
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    
    new cdk.CfnOutput(this, 'L2BucketName', {
      value: l2Bucket.bucketName
    });

    // L3
    new DevOpsTutorialL3Bucket(this, 'devops-tutorial-cdk-l3-bucket', 3);
  }
}
