#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FenixStack } from '../lib/cdk-stack';

const app = new cdk.App();
new FenixStack(app, 'FenixStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  tags: { "Client": "FenixEngineering" }
});