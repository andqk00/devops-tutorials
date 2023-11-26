# AWS Identity and Access Management (IAM)

Inside an AWS account, there can be multiple AWS IAMs with limited permissions to access into AWS resources without knowing the root access info.

## <u>I. Authentication and Authorization</u>

- Authentication answers the question `Are you who you say you are?`.
- Authorization answers the question `What actions can you perform?`.

## <u>II. IAM features</u>

- **Global**: IAM is global and not specific to any one Region. You can see and use your IAM configurations from any Region in the AWS Management Console.
- **Integrated with AWS services**: IAM is integrated with many AWS services by default.
- **Shared access**: You can grant other identities permission to administer and use resources in your AWS account without having to share your password and key.
- **Multi-factor authentication**: IAM supports MFA. You can add MFA to your account and to individual users for extra security.
- **Identity federation**: IAM supports identity federation, which allows users with passwords elsewhere—like your corporate network or internet identity provider—to get temporary access to your AWS account.
- **Free to use**: Any AWS customer can use IAM; the service is offered at no additional charge.

## <u>III. IAM user and groups</u>

- **Access to the AWS Management Console**: need to provide username and password.
- **Programmatic access to the AWS CLI and AWS API**: need to generate a set of access keys.

All users in an IAM group inherit the permissions assigned to the group. <br>
Some of the AWS group features:

- Groups can have many users.
- Users can belong to many groups.
- Groups cannot belong to groups.

## <u>IV. IAM policies</u>

### Example

Most policies are stored in AWS as JSON documents with several policy elements. The following example provides admin access through an IAM identity-based policy.

```
{
    "Version": "2012-10-17",
    "Statement": [{
        "Effect": "Allow",
        "Action": "*",
        "Resource": "*"
    }]
}
```

This policy has four major JSON elements: Version, Effect, Action, and Resource.

- **Version**: version of policy language (include <mark>"Version": "2012-10-17"</mark> to use all the available policy features)
- **Effect**: `Allow` or `Deny`
- **Action**: type of actions that will be allowed (`*` for all related actions)
- **Resource**: specifies the object or objects that the policy statement covers

The next example shows a more granular IAM policy.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyS3AccessOutsideMyBoundary",
      "Effect": "Deny",
      "Action": [
        "s3:*"
      ],
      "Resource": "*",
      "Condition": {
        "StringNotEquals": {
          "aws:ResourceAccount": [
            "222222222222"
          ]
        }
      }
    }
  ]
}
```

## <u>V. IAM role</u>

Most likely used for when an AWS service need to make API calls to another AWS services, or to grant access to federated users. <br>

Consider using an identity provider (IdP) with AWS service such as AWS IAM Identity Center or a third-party one, provides a single sort of truth for all identities in your organization.
