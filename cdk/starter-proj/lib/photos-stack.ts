import * as cdk from "aws-cdk-lib";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class PhotosStack extends cdk.Stack {
  private stackSuffix: string;
  public readonly photosBucketArn: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.initializeSuffix();

    const photosBucket = new Bucket(this, "photos-bucket-andqk", {
      bucketName: `photos-bucket-andqk-${this.stackSuffix}`,
    });
    this.photosBucketArn = photosBucket.bucketArn;

    // new cdk.CfnOutput(this, "photos-bucket-arn", {
    //   value: photosBucket.bucketArn,
    //   exportName: "photos-bucket-arn",
    // });

    // (photosBucket.node.defaultChild as CfnBucket).overrideLogicalId(
    //   "photos-bucket-andqk"
    // );
  }

  private initializeSuffix() {
    const shortStackId = cdk.Fn.select(2, cdk.Fn.split("/", this.stackId));
    this.stackSuffix = cdk.Fn.select(0, cdk.Fn.split("-", shortStackId));
  }
}
