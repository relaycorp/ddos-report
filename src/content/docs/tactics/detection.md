---
title: Attack detection
sidebar:
  order: 11
---

Attack detection is a critical part of DDoS mitigation,
as it allows you to identify and respond to attacks before they cause significant damage.
This process depends on developers to [instrument their applications](#instrumentation),
and operators to [monitor the system and respond to alerts](#monitoring-and-alerting).

## Instrumentation

Instrumentation is the process of adding code to an application to collect data about
its current state (e.g. resource utilisation) and behaviour (e.g. error rates).
This data can be used to detect traffic surges,
and tell the difference between legitimate and malicious traffic.

This data, known as **telemetry data**, should focus on the business logic of the application,
as opposed to the underlying infrastructure (e.g. CPU usage).
Telemetry data comprises:

- **Logs**: Textual records of events, errors, and debugging information.
- **Metrics**: Numerical data about the application's state, such as the number of accounts created in the last hour.
- **Traces**: Data about the flow of requests through the application.

[OpenTelemetry](https://opentelemetry.io/) is a popular standard for collecting telemetry data in a vendor-neutral way.

## Monitoring and alerting

For indications of an attack,
operators should monitor telemetry data from the app and the rest of the infrastructure
(e.g. [reverse proxies](reverse-proxies.md)).
Operators should also configure alerts to be notified when unusual activity is detected,
including budget alerts to avoid unexpected costs.

[Security Information and Event Management (SIEM)](https://www.ibm.com/topics/siem) tools
can help operators detect attacks by allowing them to correlate data from multiple sources.
SIEM products include:

- [Datadog Cloud SIEM](https://www.datadoghq.com/product/cloud-siem/).
- [Elastic SIEM](https://www.elastic.co/security/siem).
- [Google Security Operations](https://cloud.google.com/security/products/security-information-event-management).
- [IBM QRadar](https://www.ibm.com/products/qradar-siem).
- [Microsoft Sentinel](https://azure.microsoft.com/products/microsoft-sentinel).
- [Splunk Enterprise Security](https://www.splunk.com/en_us/products/enterprise-security.html).
