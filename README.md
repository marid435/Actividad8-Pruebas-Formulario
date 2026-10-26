# Actividad 8: Pruebas de software

## Formulario de contacto La Salle

**Asignatura:** Arquitectura de Software  
**Estudiante:** María Daniela Solís Prado  
**Fecha:** 25 de octubre de 2026

## 1. Objetivo

Diseñar, ejecutar y documentar una estrategia básica de pruebas de software para el formulario de contacto La Salle, comparando los resultados esperados con los resultados obtenidos.

## 2. Aplicación bajo prueba

Formulario de contacto:
https://welcome-form-journey.lovable.app/formulario

## 3. Alcance

Se propone evaluar las validaciones de los campos, el comportamiento del formulario y la respuesta ante datos válidos e inválidos.


## 4. Tipos de prueba
Funcional (manual), validación de entradas (manual) y automatizada E2E con Playwright. Las unitarias y de integración no se ejecutaron por falta de acceso al código fuente.

## 5. Resultados
4 de 6 casos ejecutados, todos aprobados. Pendientes: PV-02 y PA-02. Detalle en `casos-de- pruebas.md`.

## 6. Automatización
`tests/contacto.spec.js` se ejecuta en GitHub Actions (`.github/workflows/pruebas.yml`). Run #1 fallido; run #2 aprobado tras corregir la prueba.

## 7. Evidencias
Carpeta `evidencias/` y capturas de Actions en la raíz del repositorio.
