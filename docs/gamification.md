# ORC Gamification — Draft

## 1. Purpose

Gamification is a supporting UX layer.

Its purpose is to make **operational progress visible**, not to turn business operations into a game.

## 2. Core mechanic

The basic loop is:

~~~text
CAPTURAR
   ↓
ENTENDER
   ↓
CONFERIR
   ↓
RESOLVER
   ↓
OPERAR
~~~

A completed resolution produces a visible sense of progress.

## 3. What should be rewarded

The system should reinforce:

- reduced manual entry;
- successful resolution;
- correct confirmation;
- completion of operational batches;
- reduction of unresolved items;
- successful synchronization;
- useful exception handling.

It should not reward raw activity such as clicks, scans or form submissions.

## 4. Progress language

Examples:

~~~text
17 produtos processados
████████████░░░░

12 resolvidos automaticamente
4 confirmados
1 pendente
~~~

Or at entity level:

~~~text
PRODUTO X

✓ Identidade
✓ Descrição
✓ Unidade
? Preço

3/4 resolvidos
~~~

## 5. Resolution states as experience

The ORC symbol's visual grammar becomes the experience grammar:

~~~text
cyan   → capture / observation
green  → resolution / confirmation
amber  → attention / incomplete
red    → conflict / blocked
~~~

The completion arc can progressively close as an operation moves toward a resolved state.

## 6. Avoid competitive mechanics

The initial product should avoid:

- employee leaderboards;
- public rankings;
- arbitrary points;
- streak pressure;
- punitive scores;
- reward systems that encourage unsafe or incorrect confirmations.

If incentives are introduced later, they should reinforce correctness and operational quality rather than speed alone.

## 7. Operational dashboard

A manager or advanced user may see:

~~~text
OPERAÇÃO HOJE

47 produtos processados

41 resolvidos automaticamente
4 confirmados pelo operador
2 em revisão

87% resolução automática
~~~

These metrics are operational telemetry, not player scores.

## 8. Completion moment

A successful batch can use a restrained completion state:

~~~text
✓ OPERAÇÃO RESOLVIDA

17 produtos
16 resolvidos
1 pendente

94% sem retrabalho

[ CONTINUAR ]
~~~

The symbol can animate from an open capture state to the completed check state.

## 9. Principle

> **Gamification should visualize progress toward operational resolution, not manufacture motivation through competition.**

This is a UX hypothesis to validate with real operators.
