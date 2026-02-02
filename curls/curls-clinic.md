# Curls para CRD de consultas clínicas

## Prerequisitos

- Tenes que estar autenticado como usuario con el rol "vet".
- Primero, logeate para obtener un token JWT (Ver curls-auth.md).
- Reemplaza `YOUR_JWT_TOKEN` con el token de la respuesta de tu login.
- Base URL: http://localhost:8000/api/clinic

## Encontrar todas las consultas

```bash
curl -X GET http://localhost:8000/api/clinic \
 -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Encontrar consulta por ID

```bash
curl -X GET http://localhost:8000/api/clinic/CONSULT_ID \
 -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Crear nueva consulta

```bash
curl -X POST http://localhost:8000/api/clinic \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer YOUR_JWT_TOKEN" \
 -d '{
"petId": "PET_ID",
"vetId": "VET_ID",
"consult": "Descripción de la consulta",
"treatment": "Tratamiento prescrito"
}'
```

## Borrar consulta

```bash
curl -X DELETE http://localhost:8000/api/clinic/CONSULT_ID \
 -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Notas

- Todas las operaciones requieren autenticación como veterinario.
- Las consultas clínicas no se pueden modificar una vez creadas (no hay endpoint PUT).
- petId y vetId deben ser IDs válidos de mascotas y veterinarios existentes.
- consult y treatment son campos de texto obligatorios.
