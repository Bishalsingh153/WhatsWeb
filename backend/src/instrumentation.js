import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

const traceExporter = new OTLPTraceExporter({
  url: "http://localhost:4317",
});

const sdk = new NodeSDK({
  resource: resourceFromAttributes({
    [ATTR_SERVICE_NAME]: "chat-app-backend",
  }),
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

try {
  await sdk.start();
  console.log("✅ OpenTelemetry initialized");
} catch (error) {
  console.error("❌ Failed to initialize OpenTelemetry:", error);
}