export const customTypes = {
  selectTeacher: "selectTeacher",
};

export const fieldsTeacher = [
  {
    name: "nombre",
    label: "Nombre",
    type: "text",
    validationRules: {
      required: "El nombre es obligatorio",
    },
  },
  {
    name: "apellido",
    label: "Apellido",
    type: "text",
    validationRules: {
      required: "El apellido es obligatorio",
    },
  },
  {
    name: "identificacion",
    label: "Identificación",
    type: "text",
    validationRules: {
      required: "La identificación es obligatoria",
    },
  },
  {
    name: "correo",
    label: "Correo",
    type: "email",
    validationRules: {
      required: "El correo es obligatorio",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Correo electrónico inválido",
      },
    },
  },
  {
    name: "direccion",
    label: "Dirección",
    type: "text",
    validationRules: {
      required: "La dirección es obligatoria",
    },
  },
  {
    name: "telefono",
    label: "Teléfono",
    type: "text",
    validationRules: {
      required: "El teléfono es obligatorio",
    },
  },
  {
    name: "contraseña",
    label: "Contraseña",
    type: "password",
    validationRules: {
      required: "La contraseña es obligatoria",
      minLength: {
        value: 8,
        message: "La contraseña debe tener al menos 8 caracteres",
      },
    },
  },
  {
    name: "fechaNacimiento",
    label: "Fecha de Nacimiento",
    type: "date",
    validationRules: {
      required: "La fecha de nacimiento es obligatoria",
    },
  },
];

export const fieldsAttendant = [
  {
    name: "nombre",
    label: "Nombre",
    type: "text",
    validationRules: {
      required: "El nombre es obligatorio",
    },
  },
  {
    name: "apellido",
    label: "Apellido",
    type: "text",
    validationRules: {
      required: "El apellido es obligatorio",
    },
  },
  {
    name: "identificacion",
    label: "Identificación",
    type: "text",
    validationRules: {
      required: "La identificación es obligatoria",
    },
  },
  {
    name: "correo",
    label: "Correo",
    type: "email",
    validationRules: {
      required: "El correo es obligatorio",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Correo electrónico inválido",
      },
    },
  },
  {
    name: "direccion",
    label: "Dirección",
    type: "text",
    validationRules: {
      required: "La dirección es obligatoria",
    },
  },
  {
    name: "telefono",
    label: "Teléfono",
    type: "text",
    validationRules: {
      required: "El teléfono es obligatorio",
    },
  },
  {
    name: "contraseña",
    label: "Contraseña",
    type: "password",
    validationRules: {
      required: "La contraseña es obligatoria",
      minLength: {
        value: 8,
        message: "La contraseña debe tener al menos 8 caracteres",
      },
    },
  },
];

export const fieldsCourse = [
  {
    name: "nombre",
    label: "Nombre  del curso",
    type: "text",
    validationRules: {
      required: "El nombre es obligatorio",
    },
  },
  {
    name: "idProfesor",
    label: "Profesor de grupo",
    type: customTypes.selectTeacher,
    validationRules: {
      required: "El profesor es obligatorio",
    },
  },
];

export const fieldSubject = [
  {
    name: "nombre",
    label: "Nombre de la asignatura",
    type: "text",
    validationRules: {
      required: "El nombre es obligatorio",
    },
  },
];
