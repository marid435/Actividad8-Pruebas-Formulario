# Casos de prueba — Actividad 8

## Aplicación
Formulario de contacto La Salle: https://welcome-form-journey.lovable.app/formulario

## Estrategia
Se proponen pruebas unitarias, de integración y funcionales. Las pruebas unitarias y de integración requieren acceso a los componentes o al código correspondiente; no se consideran ejecutadas hasta contar con evidencia de su ejecución.

## PU-01 — Validación de correo válido
- **Tipo:** Unitaria.
- **Objetivo:** comprobar que la lógica de validación acepte un correo con formato válido.
- **Requisito:** formato del correo electrónico.
- **Precondiciones:** disponer de la función de validación y del entorno de pruebas.
- **Entrada:** usuario@example.com.
- **Pasos:** ejecutar la función de validación con el correo indicado y comprobar el resultado.
- **Esperado:** el correo es aceptado.
- **Obtenido:** pendiente de ejecutar con acceso al código.
- **Estado:** pendiente.
- **Evidencia:** por añadir.

## PU-02 — Validación de correo inválido
- **Tipo:** Unitaria.
- **Objetivo:** comprobar que la lógica rechace un correo con formato incorrecto.
- **Requisito:** formato del correo electrónico.
- **Precondiciones:** disponer de la función de validación y del entorno de pruebas.
- **Entrada:** daniela@gmailcom.
- **Pasos:** ejecutar la función de validación y comprobar el resultado.
- **Esperado:** el correo es rechazado.
- **Obtenido:** pendiente de ejecutar con acceso al código.
- **Estado:** pendiente.
- **Evidencia:** por añadir.

## PI-01 — Integración de datos válidos
- **Tipo:** Integración.
- **Objetivo:** comprobar que los datos válidos pasen de la interfaz al componente que procesa el formulario.
- **Requisito:** comunicación entre interfaz y procesamiento.
- **Precondiciones:** conocer los componentes conectados y disponer del entorno de prueba.
- **Entrada:** nombre, correo válido, asunto y mensaje.
- **Pasos:** introducir datos válidos, enviar y revisar la comunicación entre componentes.
- **Esperado:** los datos se procesan correctamente.
- **Obtenido:** pendiente de verificar con acceso a los componentes.
- **Estado:** pendiente.
- **Evidencia:** por añadir.

## PI-02 — Integración con datos inválidos
- **Tipo:** Integración.
- **Objetivo:** verificar que los datos inválidos no continúen al procesamiento cuando la validación debe rechazarlos.
- **Requisito:** validación antes del procesamiento.
- **Precondiciones:** disponer del entorno y de los componentes que intervienen en el envío.
- **Entrada:** formulario con correo inválido.
- **Pasos:** introducir un correo inválido, intentar enviar y revisar la respuesta del componente de procesamiento.
- **Esperado:** los datos inválidos son rechazados.
- **Obtenido:** pendiente de verificar con acceso a los componentes.
- **Estado:** pendiente.
- **Evidencia:** por añadir.

## PF-01 — Envío con datos válidos
- **Tipo:** Funcional.
- **Objetivo:** comprobar el comportamiento del formulario al diligenciarlo correctamente.
- **Requisito:** envío del formulario.
- **Precondiciones:** formulario accesible.
- **Entrada:** datos de prueba válidos en todos los campos obligatorios.
- **Pasos:** diligenciar los campos, enviar y observar la respuesta.
- **Esperado:** el sistema muestra la confirmación prevista y completa el flujo de envío.
- **Obtenido:** completar con el resultado exacto observado en la captura.
- **Estado:** pendiente de registrar el resultado.
- **Evidencia:** captura del formulario enviado.

## PF-02 — Envío con formulario vacío
- **Tipo:** Funcional.
- **Objetivo:** verificar la respuesta del formulario cuando se intenta enviar sin completar los campos obligatorios.
- **Requisito:** campos obligatorios.
- **Precondiciones:** formulario accesible.
- **Entrada:** todos los campos vacíos.
- **Pasos:** abrir el formulario, dejar los campos vacíos, pulsar enviar y observar la respuesta.
- **Esperado:** el envío inválido se bloquea y se indican los campos que deben corregirse.
- **Obtenido:** completar con lo que realmente se observó en la captura.
- **Estado:** pendiente de registrar el resultado.
- **Evidencia:** captura del formulario vacío después del intento de envío.

## Nota sobre los resultados
No marcar una prueba como aprobada o fallida hasta comparar el resultado esperado con el obtenido. Si no fue posible ejecutarla, indicar que está pendiente y explicar la limitación.
