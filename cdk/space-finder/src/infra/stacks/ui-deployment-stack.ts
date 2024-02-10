import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { getPrefixFromStack } from "../utils";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { join } from "path";
import { existsSync } from "fs";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Distribution, OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";

export class UiDeploymentStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const prefix = getPrefixFromStack(this);

    const deploymentBucket = new Bucket(this, "UiDeploymentBucket", {
      bucketName: `space-finder-fe-${prefix}`,
    });

    const uiDir = join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "space-finder-fe",
      "dist"
    );
    if (!existsSync(uiDir)) {
      console.warn("UI dir not found: " + uiDir);
      return;
    }

    new BucketDeployment(this, "SpacesFinderDeployment", {
      destinationBucket: deploymentBucket,
      sources: [Source.asset(uiDir)],
    });

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      "OriginAccessIdentity"
    );
    deploymentBucket.grantRead(originAccessIdentity);

    const distribution = new Distribution(this, "SpacesFinderDistribution", {
      defaultRootObject: "index.html",
      defaultBehavior: {
        origin: new S3Origin(deploymentBucket, {
          originAccessIdentity,
        }),
      },
    });

    new CfnOutput(this, "SpacesFinderUrl", {
      value: distribution.distributionDomainName,
    });
  }
}
