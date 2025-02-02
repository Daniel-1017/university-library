import config from "@/lib/config";
import { Client as WorkflowCLient } from "@upstash/workflow";
import { Client as QStashClient, resend } from "@upstash/qstash";

export const workflowClient = new WorkflowCLient({
    baseUrl: config.env.upstash.qstashUrl,
    token: config.env.upstash.qstashToken,
});

const qstashClient = new QStashClient({ token: config.env.upstash.qstashUrl });

export const sendEmail = async ({ email, subject, message }: { email: string; subject: string; message: string }) => {
    await qstashClient.publishJSON({
        api: {
            name: "email",
            provider: resend({ token: config.env.resendToken }),
        },
        body: {
            from: "Daniel Frimu <hello.danielfrimu.com>",
            to: [email],
            subject,
            html: message,
        },
    });
};
