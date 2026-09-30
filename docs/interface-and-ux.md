# ORC Interface & UX — Draft

## 1. Experience principle

The operator should not feel that they are filling an ERP.

The intended experience is:

> **capture → understand → confirm → resolve → operate**

The interface exposes the progress of resolution while keeping ORC's semantic complexity underneath.

## 2. Primary navigation

The initial MVP can remain centered on four actions:

~~~text
IDENTIFICAR
ENTRADA
ESTOQUE
HISTÓRICO
~~~

The exact navigation model remains subject to usability testing.

## 3. Identify flow

### Screen 01 — Home

~~~text
ORC

O que vamos resolver?

[ IDENTIFICAR ]

[ ENTRADA ]   [ ESTOQUE ]

[ HISTÓRICO ]

24 resolvidos hoje
~~~

The home screen should emphasize the current operational task, not configuration.

### Screen 02 — Capture

The camera is the primary input.

~~~text
IDENTIFICAR

        [ camera ]

Aponte para o produto

[ inserir código ]
~~~

The system can attempt, in order or in parallel:

- barcode/EAN;
- OCR;
- visual observation;
- existing entity lookup;
- contextual information.

QR is optional.

### Screen 03 — Processing

Do not expose model names or technical internals.

~~~text
CAPTURANDO      ✓
ENTENDENDO      ✓
CONFERINDO      …
RESOLVENDO      …
~~~

This is the visible form of the ORC pipeline.

### Screen 04 — Resolved

~~~text
✓ PRODUTO IDENTIFICADO

Produto X
500 ml

Identidade       ✓
Descrição        ✓
Unidade          ✓
EAN              ✓

[ CONFIRMAR ]
~~~

### Screen 05 — Exception

The operator should only see what requires human intervention.

~~~text
AINDA FALTA UMA INFORMAÇÃO

Produto X
500 ml

✓ Identidade
✓ Descrição
✓ Unidade
? Preço de venda

[ INFORMAR ]
[ DEIXAR PARA DEPOIS ]
~~~

### Screen 06 — Ambiguity

~~~text
IDENTIFICAÇÃO INCERTA

Encontramos 2 possibilidades.

○ Produto X — 500 ml
○ Produto X — 1 L

[ CONFIRMAR ]
~~~

The interface should explain the decision without exposing assertion graphs or model probabilities unless the user is in an advanced diagnostic view.

## 4. State language

The interface maps ORC states to visual states:

~~~text
CAPTURANDO     cyan
PROCESSANDO    cyan → green
RESOLVIDO      green
ATENÇÃO        amber
CONFLITO       red
BLOQUEADO      red
~~~

These colors are functional state indicators.

## 5. Product identity without QR

The MVP must support:

~~~text
camera
  ↓
EAN / OCR / vision
  ↓
observations
  ↓
resolution
  ↓
Product Entity
~~~

The system must not assume that every product has a generated marker.

## 6. Later marker-assisted flow

When QR/NFC becomes available:

~~~text
QR / NFC / EAN
      ↓
Identity Reference
      ↓
Product Entity
      ↓
new observation
      ↓
operation
~~~

This should accelerate identification rather than redefine the core architecture.

## 7. Interaction principles

1. One primary action per state.
2. Never ask for information already available with acceptable provenance.
3. Ask only for missing or consequential information.
4. Preserve uncertainty instead of hiding it.
5. Make progress visible.
6. Keep technical complexity out of the operator path.
7. Let the operator override uncertain automation with an explicit confirmation.
8. Make every consequential action traceable.

## 8. UX objective

The primary UX metric is not number of screens completed.

It is:

> **How much operational work can be resolved without redundant human data entry?**
