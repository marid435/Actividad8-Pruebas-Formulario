# Casos de prueba — Actividad 8

Aplicación: https://welcome-form-journey.lovable.app/formulario

## Estrategia
Sin acceso al código fuente, se usan tres tipos de caja negra: funcional (manual), validación de entradas (manual) y automatizada E2E (Playwright en GitHub Actions). Dos casos por tipo.

## PF-01 — Envío con datos válidos (Funcional)
- **Objetivo:** comprobar el envío con datos correctos.
- **Requisito:** envío del formulario.
- **Precondiciones:** formulario accesible.
- **Entrada:** Nombre Ana, correo anamaria@gmail.com, asunto Ventas, mensaje Ventas.
- **Pasos:** abrir el formulario, diligenciar los cuatro campos, pulsar Enviar.
- **Esperado:** confirmación de envío.
- **Obtenido:** pantalla "¡Mensaje enviado!" con resumen de asunto y mensaje.
- **Estado:** aprobado.
- **Evidencia:** evidencias/PRUEBAS 1.JPG

## PF-02 — Envío con formulario vacío (Funcional)
- **Objetivo:** verificar el bloqueo con campos obligatorios vacíos.
- **Requisito:** campos obligatorios.
- **Precondiciones:** formulario accesible.
- **Entrada:** todos los campos vacíos.
- **Pasos:** abrir el formulario y pulsar Enviar.
- **Esperado:** envío bloqueado y campos a corregir indicados.
- **Obtenido:** banner "Faltan datos por completar", enlaces "Corregir ..." y errores por campo.
- **Estado:** aprobado.
- **Evidencia:** evidencias/Captura.4.JPG

## PV-01 — Correo con formato inválido (Validación)
- **Objetivo:** comprobar que se rechaza un correo mal escrito.
- **Requisito:** formato del correo.
- **Precondiciones:** formulario accesible.
- **Entrada:** Nombre camila, correo sin formato válido, mensaje vacío.
- **Pasos:** escribir los datos y pulsar Enviar.
- **Esperado:** error de formato en Correo y sin envío.
- **Obtenido:** "El correo no tiene un formato válido"; los datos escritos se conservan.
- **Estado:** aprobado.
- **Evidencia:** evidencias/PRUEBA 2.JPG

## PV-02 — Correo sin punto en el dominio (Validación)
- **Entrada:** daniela@gmailcom. **Esperado:** correo rechazado.
- **Obtenido:** no ejecutado. **Estado:** pendiente.

## PA-01 — Carga del formulario (Automatizada)
- **Objetivo:** verificar que /formulario cargue y su contenido sea visible.
- **Requisito:** disponibilidad del formulario.
- **Precondiciones:** workflow .github/workflows/pruebas.yml.
- **Pasos:** push a main; Actions ejecuta tests/contacto.spec.js.
- **Esperado:** job en verde.
- **Obtenido:** run #1 falló (44 s); run #2 aprobado (3 min 27 s) tras actualizar la prueba.
- **Estado:** aprobado (run #2).
- **Evidencia:** prueba de automatizacion2.JPG, pruebas de automatizacion.JPG

## PA-02 — Envío vacío automatizado (Automatizada)
- **Esperado:** errores de campo visibles.
- **Obtenido:** no ejecutado. **Estado:** pendiente.
