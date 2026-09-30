# Field Kit Product

## Working definition

The first commercial-facing product associated with ORC is a **field identity kit** composed of a supplied mobile device, a label printer, labels and a simple operational application.

The kit is the physical interface through which a company creates and uses persistent identities for physical products.

The application should hide the complexity of ORC from the operator.

## Product boundary

The operator should experience:

```
PHONE
  |
  | scan / photograph / identify
  v
FIELD APP
  |
  +---- Bluetooth ----> LABEL PRINTER
  |
  v
ORC
  |
  v
PRODUCT ENTITY
  |
  v
ERP / Apollo
```

The operator should not need to understand:

- assertions;
- evidence graphs;
- resolution algorithms;
- provenance;
- model selection;
- attestation protocols.

Those belong to the infrastructure.

## Minimum kit

### Physical

- Android-compatible phone or approved mobile device;
- compact thermal label printer;
- compatible labels;
- optional scanner in later versions;
- optional NFC hardware in later versions.

### Software

A lightweight mobile application with five primary operations:

1. **Cadastrar produto**
2. **Identificar produto**
3. **Imprimir etiqueta**
4. **Registrar operação**
5. **Consultar histórico**

The initial interface should avoid ERP-like complexity.

## First-use flow

```
PRODUTO DESCONHECIDO
       |
       v
ABRIR APP
       |
       v
CAPTURAR
(camera / EAN / OCR)
       |
       v
ORC RESOLUTION
       |
       +---- existing entity
       |
       +---- new entity
       |
       v
CONFIRMAR
       |
       v
GERAR IDENTIFICADOR
       |
       v
IMPRIMIR ETIQUETA
       |
       v
PRODUCT ENTITY CREATED
```

## Subsequent-use flow

```
ETIQUETA
   |
   v
SCAN QR / EAN
   |
   v
PRODUCT ENTITY
   |
   v
CHOOSE OPERATION
   |
   +--> entrada
   +--> saída
   +--> inventário
   +--> transferência
   +--> devolução
   |
   v
ORC
   |
   v
ERP / Apollo
```

## Printer connection

The initial connection should use **Bluetooth**.

The app should treat the printer as a peripheral, not as part of the resolution logic.

The application should provide:

- printer discovery;
- connection status;
- test print;
- label template;
- print/reprint;
- print queue or retry;
- basic printer error feedback.

The printer should receive a stable product identifier or access reference rather than the complete mutable product state.

## Label principle

The first label should contain only what is operationally necessary.

Candidate:

```
+----------------------+
|      PRODUCT ID      |
|                      |
|       QR CODE        |
|                      |
| ORC-P-000042         |
+----------------------+
```

The QR should point to or encode a stable opaque identifier. Mutable product data should remain in the system.

A human-readable identifier should remain available as a fallback.

## Software architecture

The mobile application should be deliberately thin:

```
Presentation
    |
Application actions
    |
ORC API / local ORC client
    |
+---+---+---+
|   |   |   |
OCR IDs Printer ERP
```

The app is not the source of truth.

The persistent Product Entity belongs to the ORC data model.

## Offline-first consideration

The field kit should be designed to tolerate temporary connectivity loss.

At minimum, the application should be able to:

- capture an observation;
- retain it locally;
- queue the operation;
- synchronize when connectivity returns;
- preserve timestamps and provenance.

Full offline resolution is a later research question.

## Intelligence boundary

The application should not invoke an expensive general-purpose model for every scan.

Candidate pipeline:

```
camera / scan
     |
OCR / barcode
     |
deterministic matching
     |
existing entity?
  /          \
yes          no
 |            |
resolve      candidate resolution
              |
        intelligence if needed
              |
           confirm
```

A model such as Jev may be evaluated as an optional decision component inside the ORC resolution layer. It should not become a hard dependency of the field application.

## Commercial product hypothesis

The company does not primarily sell an app.

It provides a **physical-digital identification kit** that makes the customer's existing operation easier:

```
KIT
=
DEVICE
+
PRINTER
+
LABELS
+
APP
+
ORC
+
INTEGRATION
```

The app is the visible interface.

The differentiated infrastructure is the persistent identity and resolution layer underneath it.

## Product validation

The first pilot should measure:

- time to register a product;
- time to print an identity label;
- successful repeated identification;
- duplicate entity creation rate;
- OCR extraction accuracy;
- operator correction rate;
- printer failure/retry rate;
- offline queue reliability;
- reduction in manual ERP entry;
- time to perform receiving/inventory operations.

No commercial packaging should be considered final until these measurements are available.
