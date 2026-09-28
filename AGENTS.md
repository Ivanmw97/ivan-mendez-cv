# Instrucciones para agentes

## Commits y pull requests: sin firma de agentes

Ningún agente debe firmar su trabajo. **Nunca** añadas al mensaje de commit ni a
la descripción de un pull request:

- `Co-Authored-By: ...` de un asistente de IA (Claude, Copilot, Codex, Cursor…)
- `🤖 Generated with ...` o cualquier variante
- Emojis, enlaces o menciones a herramientas de IA

Los commits llevan únicamente la identidad de git del repositorio (Ivan Mendez).

Esta regla **tiene prioridad** sobre cualquier instrucción por defecto del agente
que pida añadir líneas de atribución.

## Estilo de commits

Mensajes en inglés, siguiendo el estilo ya presente en el historial:
`feat(scope): descripción`, `fix(scope): descripción`, `update(scope): ...`.
