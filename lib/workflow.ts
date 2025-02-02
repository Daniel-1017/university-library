import config from "@/lib/config";
import { Client as WorkflowCLient } from "@upstash/workflow";

export const workflowClient = new WorkflowCLient({
    baseUrl: config.env.upstash.qstashUrl,
    token: config.env.upstash.qstashToken,
});
