const messages = {
  es: {
    translations: {
      signup: {
        title: "Regístrate 📝",
        toasts: {
          success: "¡Usuario creado con éxito! Inicia sesión ahora. 🎉",
          fail: "Error al crear usuario. Verifica los datos ingresados. ❌",
        },
        form: {
          name: "Nombre 👤",
          email: "Email 📧",
          password: "Contraseña 🔑",
        },
        buttons: {
          submit: "Registrarse 📩",
          login: "¿Ya tienes cuenta? ¡Ingresa aquí! 👋",
        },
      },
      login: {
        title: "Iniciar sesión 🔑",
        form: {
          email: "Email 📧",
          password: "Contraseña 🔑",
        },
        buttons: {
          submit: "Ingresar 🚪",
          register: "¡Regístrate ahora mismo! 🚀",
        },
      },
      plans: {
        form: {
          name: "Nombre 📛",
          users: "Usuarios 👤",
          connections: "Conexiones 🔗",
          campaigns: "Campañas 📢",
          schedules: "Agendamientos 🗓️",
          enabled: "Habilitadas ✅",
          disabled: "Deshabilitadas ❌",
          clear: "Cancelar ❎",
          delete: "Eliminar 🗑️",
          save: "Guardar 💾",
          yes: "Sí ✔️",
          no: "No ✖️",
          money: "$ 💵",
        },
      },
      companies: {
        title: "Registrar Empresa 🏢",
        form: {
          name: "Nombre de la empresa 🏷️",
          plan: "Plan 📋",
          token: "Token 🔑",
          submit: "Registrar 📩",
          success: "¡Empresa creada con éxito! 🎉",
        },
      },
      auth: {
        toasts: {
          success: "¡Sesión iniciada correctamente! 🎉",
        },
        token: "Token 🔐",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Atenciones hoy: 📊",
          },
        },
      },
      connections: {
        title: "Conexiones 📱",
        toasts: {
          deleted: "¡Conexión de WhatsApp eliminada con éxito! 🗑️",
        },
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteMessage: "¿Estás seguro? Esta acción no se puede deshacer. ❗",
          disconnectTitle: "Desconectar 🔌",
          disconnectMessage: "¿Seguro? Necesitarás escanear el QR nuevamente. 🔄",
        },
        buttons: {
          add: "Agregar WhatsApp ➕",
          disconnect: "Desconectar 🔌",
          tryAgain: "Intentar nuevamente 🔄",
          qrcode: "QR CODE 📲",
          newQr: "Nuevo QR CODE 🆕",
          connecting: "Conectando... ⏳",
        },
        toolTips: {
          disconnected: {
            title: "Error al iniciar sesión en WhatsApp ❌",
            content: "Verifica tu conexión a internet e intenta nuevamente. 🌐",
          },
          qrcode: {
            title: "Esperando lectura de QR Code ⌛",
            content: "Escanee el código QR con su teléfono. 📱",
          },
          connected: {
            title: "¡Conexión exitosa! ✅",
          },
          timeout: {
            title: "Conexión perdida ⚠️",
            content: "Verifica la conexión de tu teléfono. 📵",
          },
        },
        table: {
          name: "Nombre 📛",
          number: "Número 🔢",
          status: "Estado 📊",
          lastUpdate: "Última actualización 🕒",
          default: "Predeterminado ⭐",
          actions: "Acciones 🛠️",
          session: "Sesión 💻",
        },
      },
      whatsappModal: {
        title: {
          add: "Agregar WhatsApp ➕",
          edit: "Editar WhatsApp ✏️",
        },
        tabs: {
          general: "General 📋",
          messages: "Mensajes 💬",
          assessments: "Evaluaciones ⭐",
          integrations: "Integraciones 🔌",
          schedules: "Horario laboral 🕒",
        },
        form: {
          name: "Nombre 📛",
          default: "Predeterminado ⭐",
          sendIdQueue: "Fila 📑",
          timeSendQueue: "Redirigir a fila en X minutos ⏱️",
          queueRedirection: "Redirección de Fila 🔀",
          outOfHoursMessage: "Mensaje fuera de horario 🕒",
          queueRedirectionDesc: "Selecciona fila para redirigir contactos sin fila asignada 📥",
          prompt: "Prompt 💡",
          expiresTicket: "Cerrar chats después de X minutos ⏳",
          expiresInactiveMessage: "Mensaje por inactividad 💤",
          greetingMessage: "Mensaje de bienvenida 👋",
          complationMessage: "Mensaje de conclusión ✅",
        },
        buttons: {
          okAdd: "Agregar ➕",
          okEdit: "Guardar 💾",
          cancel: "Cancelar ❌",
        },
        success: "WhatsApp guardado con éxito. ✅",
      },
      qrCode: {
        message: "Escanee el código QR para iniciar sesión 📲",
      },
      contacts: {
        title: "Contactos 👥",
        toasts: {
          deleted: "¡Contacto eliminado con éxito! 🗑️",
          deletedAll: "¡Todos los contactos eliminados con éxito! 🗑️",
        },
        searchPlaceholder: "Buscar... 🔍",
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteAllTitle: "Eliminar Todos 🗑️",
          importTitle: "Importar contactos 📥",
          deleteMessage: "¿Seguro que quieres eliminar este contacto? Se perderán todos los tickets relacionados. ❗",
          deleteAllMessage: "¿Seguro que quieres eliminar TODOS los contactos? Se perderán todos los tickets relacionados. ❗",
          importMessage: "¿Importar contactos de la agenda de WhatsApp? 📱",
        },
        buttons: {
          import: "Importar Contactos 📥",
          importSheet: "Importar Excel 📄",
          add: "Agregar Contacto ➕",
          export: "Exportar Contactos 📤",
          delete: "Eliminar Todos los Contactos 🗑️"
        },
        table: {
          name: "Nombre 📛",
          whatsapp: "WhatsApp 📱",
          email: "Email 📧",
          actions: "Acciones 🛠️",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Agregar Proyecto ➕",
          edit: "Editar Proyecto ✏️",
        },
        form: {
          id: "ID 🆔",
          type: "Tipo 📋",
          name: "Nombre 📛",
          projectName: "Nombre del Proyecto 📂",
          language: "Idioma 🌐",
          jsonContent: "Contenido JSON 🗂️",
          urlN8N: "URL 🌐",
          typebotSlug: "Slug de Typebot 🤖",
          typebotExpires: "Tiempo de expiración (minutos) ⏳",
          typebotKeywordFinish: "Palabra para finalizar 🛑",
          typebotKeywordRestart: "Palabra para reiniciar 🔄",
          typebotRestartMessage: "Mensaje de reinicio 🔄",
          typebotUnknownMessage: "Mensaje de opción inválida ❌",
          typebotDelayMessage: "Intervalo entre mensajes (ms) ⏱️",   
        },
        buttons: {
          okAdd: "Agregar ➕",
          okEdit: "Guardar 💾",
          cancel: "Cancelar ❌",
          test: "Probar Bot 🤖",
        },
        messages: {
          testSuccess: "¡Integración probada con éxito! ✅",
          addSuccess: "Integración agregada con éxito. ✅",
          editSuccess: "Integración actualizada con éxito. ✅",
        },
      },
      sideMenu: {
        name: "Menú Lateral Inicial 🏠",
        note: "Si está habilitado, el menú iniciará cerrado 📥",
        options: {
          enabled: "Abierto 📂",
          disabled: "Cerrado 📁",
        },
      },
      promptModal: {
        form: {
          name: "Nombre 📛",
          prompt: "Prompt 💡",
          voice: "Voz 🎙️",
          max_tokens: "Máximo de Tokens 🔢",
          temperature: "Temperatura 🌡️",
          apikey: "API Key 🔑",
          max_messages: "Máximo de mensajes en historial 💬",
          voiceKey: "Clave de API de Voz 🔑",
          voiceRegion: "Región de Voz 🌍",
        },
        success: "¡Prompt guardado con éxito! ✅",
        title: {
          add: "Agregar Prompt ➕",
          edit: "Editar Prompt ✏️",
        },
        buttons: {
          okAdd: "Agregar ➕",
          okEdit: "Guardar 💾",
          cancel: "Cancelar ❌",
        },
      },
      prompts: {
        title: "Prompts 💡",
        table: {
          name: "Nombre 📛",
          queue: "Sector/Fila 📑",
          max_tokens: "Máximo Tokens 🔢",
          actions: "Acciones 🛠️",
        },
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteMessage: "¿Estás seguro? ¡Esta acción es irreversible! ❗",
        },
        buttons: {
          add: "Agregar Prompt ➕",
        },
      },
      contactModal: {
        title: {
          add: "Agregar Contacto ➕",
          edit: "Editar Contacto ✏️",
        },
        form: {
          mainInfo: "Datos principales 📋",
          extraInfo: "Información adicional 📌",
          name: "Nombre 📛",
          number: "Número de WhatsApp 📱",
          email: "Email 📧",
          extraName: "Nombre del campo 📝",
          extraValue: "Valor 🔢",
          disableBot: "Deshabilitar chatbot 🤖",
          whatsapp: "Conexión origen: 🔗"
        },
        buttons: {
          addExtraInfo: "Agregar información ➕",
          okAdd: "Agregar ➕",
          okEdit: "Guardar 💾",
          cancel: "Cancelar ❌",
        },
        success: "Contacto guardado con éxito. ✅",
      },
      queueModal: {
        title: {
          add: "Agregar Fila ➕",
          edit: "Editar Fila ✏️",
        },
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
        },
        form: {
          name: "Nombre 📛",
          color: "Color 🎨",
          greetingMessage: "Mensaje de bienvenida 👋",
          complationMessage: "Mensaje de conclusión ✅",
          outOfHoursMessage: "Mensaje fuera de horario 🕒",
          ratingMessage: "Mensaje de evaluación ⭐",
          token: "Token 🔑",
          orderQueue: "Orden de la fila (Bot) 🤖",
          integrationId: "Integración 🔌",
        },
        buttons: {
          okAdd: "Agregar ➕",
          okEdit: "Guardar 💾",
          cancel: "Cancelar ❌",
          attach: "Adjuntar Archivo 📎",
        },
        serviceHours: {
          dayWeek: "Día de la semana 📅",
          startTimeA: "Hora Inicial 1 🕒",
          endTimeA: "Hora Final 1 🕓",
          startTimeB: "Hora Inicial 2 🕔",
          endTimeB: "Hora Final 2 🕕",
          monday: "Lunes 🟢",
          tuesday: "Martes 🔵",
          wednesday: "Miércoles 🟡",
          thursday: "Jueves 🟠",
          friday: "Viernes 🔴",
          saturday: "Sábado 🟣",
          sunday: "Domingo ⚪",
        },
      },
      userModal: {
        title: {
          add: "Agregar Usuario ➕",
          edit: "Editar Usuario ✏️",
        },
        form: {
          name: "Nombre 📛",
          email: "Email 📧",
          password: "Contraseña 🔑",
          profile: "Perfil 👤",
          whatsapp: "Conexión Predeterminada ⭐",

          allTicket: "Ticket Sin Fila 🚫",
          allTicketEnabled: "Habilitado ✅",
          allTicketDesabled: "Deshabilitado ❌",
        },
        buttons: {
          okAdd: "Agregar ➕",
          okEdit: "Guardar 💾",
          cancel: "Cancelar ❌",
        },
        success: "Usuario guardado con éxito. ✅",
      },
      scheduleModal: {
        title: {
          add: "Nuevo Agendamiento ➕",
          edit: "Editar Agendamiento ✏️",
        },
        form: {
          body: "Mensaje 💬",
          contact: "Contacto 👥",
          sendAt: "Fecha de agendamiento 🗓️",
          sentAt: "Fecha de envío 📤",
        },
        buttons: {
          okAdd: "Agregar ➕",
          okEdit: "Guardar 💾",
          cancel: "Cancelar ❌",
        },
        success: "Agendamiento guardado con éxito. ✅",
      },
      tagModal: {
        title: {
          add: "Nueva Etiqueta ➕",
          edit: "Editar Etiqueta ✏️",
        },
        form: {
          name: "Nombre 📛",
          color: "Color 🎨",
        },
        buttons: {
          okAdd: "Agregar ➕",
          okEdit: "Guardar 💾",
          cancel: "Cancelar ❌",
        },
        success: "Etiqueta guardada con éxito. ✅",
      },
      chat: {
        noTicketMessage: "Selecciona un ticket para comenzar a chatear. 💬",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRastra y suelta archivos aquí 📤",
          titleFileList: "Lista de archivos 📂"
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "Nuevo 🎫",
          closeallTicket: "Cerrar Todos 🚪",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Filas 📑",
      },
      tickets: {
        inbox: {
          closedAllTickets: "¿Cerrar todos los tickets? 🚫",
          closedAll: "Cerrar Todos 🚪",
          newTicket: "Nuevo Ticket 🎫",
          yes: "SÍ ✔️",
          no: "NO ✖️",
          open: "Abiertos 📂",
          resolverd: "Resueltos ✅",
        },
        toasts: {
          deleted: "El ticket actual fue eliminado. 🗑️",
        },
        notification: {
          message: "Mensaje de 💬",
        },
        tabs: {
          open: { title: "Abiertos 📂" },
          closed: { title: "Resueltos ✅" },
          search: { title: "Buscar 🔍" },
        },
        search: {
          placeholder: "Buscar tickets y mensajes 🔍",
          filterConnections: "Filtrar por conexiones 🔗",
          filterContacts: "Filtrar por contacto 👤",
          filterConections: "Filtrar por Conexión 🔗",
          filterConectionsOptions: {
            open: "Abierto 📂",
            closed: "Cerrado 🚪",
            pending: "Pendiente ⏳",
          },
          filterUsers: "Filtrar por Usuarios 👤",
          ticketsPerPage: "Tickets por página 📄"
        },
        buttons: {
          showAll: "Todos 📑",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket 🔄",
        fieldLabel: "Buscar usuarios 🔍",
        fieldQueueLabel: "Transferir a fila 📑",
        fieldQueuePlaceholder: "Seleccionar fila 📋",
        noOptions: "Ningún usuario encontrado 🕳️",
        buttons: {
          ok: "Transferir 🔄",
          cancel: "Cancelar ❌",
        },
      },
      ticketsList: {
        pendingHeader: "Pendientes ⏳",
        assignedHeader: "En Proceso 🛠️",
        noTicketsTitle: "¡Nada aquí! 🕳️",
        noTicketsMessage: "No se encontraron tickets con estos criterios 🔍",
        buttons: {
          accept: "Aceptar 👍",
          closed: "Finalizar ✅",
          transfer: "Transferir 🔄",
          reopen: "Reabrir 🔄",
          exportAsPDF: "Exportar PDF 📄"
        },
      },
      newTicketModal: {
        title: "Crear Ticket 🎫",
        fieldLabel: "Buscar contacto 🔍",
        add: "Agregar ➕",
        buttons: {
          ok: "Guardar 💾",
          cancel: "Cancelar ❌",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Panel 📊",
          connections: "Conexiones 🔗",
          tickets: "Tickets 🎫",
          quickMessages: "Respuestas Rápidas 💬",
          contacts: "Contactos 👥",
          queues: "Filas & Chatbot 📑🤖",
          tags: "Etiquetas 🏷️",
          administration: "Administración 🏢",
          users: "Usuarios 👤",
          settings: "Configuración ⚙️",
          helps: "Ayuda ❓",
          messagesAPI: "API 📡",
          schedules: "Agendamientos 🗓️",
          campaigns: "Campañas 📢",
          annoucements: "Informativos 📣",
          chats: "Chat Interno 💬",
          financeiro: "Financiero 💰",
          files: "Archivos 📂",
          prompts: "Open.Ai 🤖",
          reports: "Reportes 📊",
          queueIntegration: "Integraciones 🔌",
        },
        appBar: {
          notRegister:"Sin notificaciones 🔕",
          user: {
            profile: "Perfil 👤",
            logout: "Salir 🚪",
          },
        },
      },
      queueIntegration: {
        title: "Integraciones 🔌",
        table: {
          id: "ID 🆔",
          type: "Tipo 📋",
          name: "Nombre 📛",
          projectName: "Proyecto 📂",
          language: "Idioma 🌐",
          lastUpdate: "Última actualización 🕒",
          actions: "Acciones 🛠️",
        },
        buttons: {
          add: "Agregar Proyecto ➕",
        },
        searchPlaceholder: "Buscar... 🔍",
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteMessage: "¿Estás seguro? Esta acción es irreversible. ❗",
        },
      },
      reports: {
        title: "Reportes de Atenciones 📊",
        table: {
          id: "Ticket 🎫",
          user: "Usuario 👤",
          dateOpen: "Fecha Apertura 📅",
          dateClose: "Fecha Cierre 🚪",
          NPS: "NPS 📈",
          status: "Estado 📊",
          whatsapp: "Conexión 📱",
          queue: "Fila 📑",
          actions: "Acciones 🛠️",
          lastMessage: "Últ. Mensaje 💬",
          contact: "Cliente 👥",
          supportTime: "Tiempo de Atención ⏱️"
        },
        buttons: {
          filter: "Aplicar Filtro 🔍",
        },
        searchPlaceholder: "Buscar... 🔍",
      },
      files: {
        title: "Archivos 📂",
        table: {
          name: "Nombre 📛",
          contacts: "Contactos 👥",
          actions: "Acciones 🛠️",
        },
        toasts: {
          deleted: "¡Lista eliminada con éxito! 🗑️",
          deletedAll: "¡Todas las listas eliminadas! 🗑️",
        },
        buttons: {
          add: "Agregar ➕",
          deleteAll: "Eliminar Todos 🗑️",
        },
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteAllTitle: "Eliminar Todos 🗑️",
          deleteMessage: "¿Eliminar esta lista? ❗",
          deleteAllMessage: "¿Eliminar TODAS las listas? ❗",
        },
      },
      messagesAPI: {
        title: "API 📡",
        textMessage: {
          number: "Número 🔢",
          body: "Mensaje 💬",
          token: "Token registrado 🔑",
        },
        mediaMessage: {
          number: "Número 🔢",
          body: "Nombre de archivo 📄",
          media: "Archivo 📁",
          token: "Token registrado 🔑",
        },
      },
      notifications: {
        noTickets: "Sin notificaciones. 🔕",
      },
      quickMessages: {
        title: "Respuestas Rápidas 💬",
        searchPlaceholder: "Buscar... 🔍",
        noAttachment: "Sin adjuntos 📭",
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteMessage: "¡Acción irreversible! ¿Continuar? ❗",
        },
        buttons: {
          add: "Agregar ➕",
          attach: "Adjuntar Archivo 📎",
          cancel: "Cancelar ❌",
          edit: "Editar ✏️",
        },
        toasts: {
          success: "¡Acceso directo agregado! ✅",
          deleted: "¡Acceso directo eliminado! 🗑️",
        },
        dialog: {
          title: "Mensaje Rápido 💬",
          shortcode: "Acceso directo 🔑",
          message: "Respuesta 💬",
          save: "Guardar 💾",
          cancel: "Cancelar ❌",
          geral: "Permitir editar ✏️",
          add: "Agregar ➕",
          edit: "Editar ✏️",
          visao: "Permitir vista 👁️",
          geral: 'Global 🌍',
        },
        table: {
          shortcode: "Acceso directo 🔑",
          message: "Mensaje 💬",
          actions: "Acciones 🛠️",
          mediaName: "Archivo 📄",
          status: 'Global 🌍',
        },
      },
      messageVariablesPicker: {
        label: "Variables disponibles 📌",
        vars: {
          contactFirstName: "Primer Nombre 👤",
          contactName: "Nombre Completo 📛",
          greeting: "Saludo 👋",
          protocolNumber: "Número de Protocolo 🏷️",
          date: "Fecha 📅",
          hour: "Hora 🕒",
        },
      },
      contactLists: {
        title: "Listas de Contactos 📋",
        table: {
          name: "Nombre 📛",
          contacts: "Contactos 👥",
          actions: "Acciones 🛠️",
        },
        buttons: {
          add: "Nueva Lista ➕",
        },
        dialog: {
          name: "Nombre 📛",
          company: "Empresa 🏢",
          okEdit: "Editar ✏️",
          okAdd: "Agregar ➕",
          add: "Agregar ➕",
          edit: "Editar ✏️",
          cancel: "Cancelar ❌",
        },
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteMessage: "Acción irreversible. ❗",
        },
        toasts: {
          deleted: "Registro eliminado 🗑️",
        },
      },
      contactListItems: {
        title: "Contactos 👥",
        searchPlaceholder: "Buscar 🔍",
        buttons: {
          add: "Nuevo ➕",
          lists: "Listas 📋",
          import: "Importar 📥",
        },
        dialog: {
          name: "Nombre 📛",
          number: "Número 🔢",
          whatsapp: "WhatsApp 📱",
          email: "Email 📧",
          okEdit: "Editar ✏️",
          okAdd: "Agregar ➕",
          add: "Agregar ➕",
          edit: "Editar ✏️",
          cancel: "Cancelar ❌",
        },
        table: {
          name: "Nombre 📛",
          number: "Número 🔢",
          whatsapp: "WhatsApp 📱",
          email: "Email 📧",
          actions: "Acciones 🛠️",
        },
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteMessage: "Acción irreversible. ❗",
          importMessage: "¿Importar contactos de esta hoja? 📄",
          importTitlte: "Importar 📥",
        },
        toasts: {
          deleted: "Registro eliminado 🗑️",
        },
      },
      campaigns: {
        title: "Campañas 📢",
        searchPlaceholder: "Buscar 🔍",
        buttons: {
          add: "Nueva Campaña ➕",
          contactLists: "Listas de Contactos 📋",
        },
        table: {
          name: "Nombre 📛",
          whatsapp: "Conexión 📱",
          contactList: "Lista de Contactos 👥",
          status: "Estado 📊",
          scheduledAt: "Agendamiento 🗓️",
          completedAt: "Concluida ✅",
          confirmation: "Confirmación ✔️",
          actions: "Acciones 🛠️",
        },
        dialog: {
          new: "Nueva Campaña 🆕",
          update: "Editar Campaña ✏️",
          readonly: "Solo Lectura 📖",
          form: {
            name: "Nombre 📛",
            message1: "Mensaje 1 💬",
            message2: "Mensaje 2 💬",
            message3: "Mensaje 3 💬",
            message4: "Mensaje 4 💬",
            message5: "Mensaje 5 💬",
            confirmationMessage1: "Confirmación 1 ✔️",
            confirmationMessage2: "Confirmación 2 ✔️",
            confirmationMessage3: "Confirmación 3 ✔️",
            confirmationMessage4: "Confirmación 4 ✔️",
            confirmationMessage5: "Confirmación 5 ✔️",
            messagePlaceholder: "Contenido del mensaje 📝",
            whatsapp: "Conexión 📱",
            status: "Estado 📊",
            scheduledAt: "Agendamiento 🗓️",
            confirmation: "Confirmación ✔️",
            contactList: "Lista de Contactos 👥",
            tagList: "Lista de Etiquetas 🏷️",
            fileList: "Lista de Archivos 📂"
          },
          buttons: {
            add: "Agregar ➕",
            edit: "Actualizar 🔄",
            okadd: "OK 👍",
            cancel: "Cancelar Envíos ❌",
            restart: "Reiniciar Envíos 🔄",
            close: "Cerrar 🚪",
            attach: "Adjuntar Archivo 📎",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteMessage: "Acción irreversible. ❗",
        },
        toasts: {
          success: "Operación exitosa ✅",
          cancel: "Campaña cancelada ❌",
          restart: "Campaña reiniciada 🔄",
          deleted: "Registro eliminado 🗑️",
        },
      },
      announcements: {
        active: 'Activo ✅',
        inactive: 'Inactivo ❌',
        title: "Informativos 📢",
        searchPlaceholder: "Buscar 🔍",
        buttons: {
          add: "Nuevo Informativo ➕",
          contactLists: "Listas de Informativos 📋",
        },
        table: {
          priority: "Prioridad ⚠️",
          title: "Título 📌",
          text: "Texto 📝",
          mediaName: "Archivo 📄",
          status: "Estado 📊",
          actions: "Acciones 🛠️",
        },
        dialog: {
          edit: "Editar Informativo ✏️",
          add: "Nuevo Informativo ➕",
          update: "Actualizar Informativo 🔄",
          readonly: "Solo Lectura 📖",
          form: {
            priority: "Prioridad ⚠️",
            title: "Título 📌",
            text: "Texto 📝",
            mediaPath: "Archivo 📄",
            status: "Estado 📊",
          },
          buttons: {
            add: "Agregar ➕",
            edit: "Actualizar 🔄",
            okadd: "OK 👍",
            cancel: "Cancelar ❌",
            close: "Cerrar 🚪",
            attach: "Adjuntar Archivo 📎",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteMessage: "Acción irreversible. ❗",
        },
        toasts: {
          success: "Operación exitosa ✅",
          deleted: "Registro eliminado 🗑️",
        },
      },
      campaignsConfig: {
        title: "Configuración de Campañas ⚙️",
      },
      queues: {
        title: "Filas & Chatbot 📑🤖",
        table: {
          id: "ID 🆔",
          name: "Nombre 📛",
          color: "Color 🎨",
          greeting: "Mensaje de bienvenida 👋",
          actions: "Acciones 🛠️",
          orderQueue: "Orden de la fila (Bot) 🤖",
        },
        buttons: {
          add: "Agregar Fila ➕",
        },
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteMessage: "¿Estás seguro? ¡Acción irreversible! ❗",
        },
      },
      queueSelect: {
        inputLabel: "Filas 📑",
      },
      users: {
        title: "Usuarios 👤",
        table: {
          id: "ID 🆔",
          name: "Nombre 📛",
          status: "Estado 📊",
          email: "Email 📧",
          profile: "Perfil 👤",
          actions: "Acciones 🛠️",
        },
        status: {
          online: "Usuarios en línea 🟢",
          offline: "Usuarios fuera de línea 🔴",
        },
        buttons: {
          add: "Agregar Usuario ➕",
        },
        toasts: {
          deleted: "Usuario eliminado con éxito. 🗑️",
        },
        confirmationModal: {
          deleteTitle: "Eliminar ⚠️",
          deleteMessage: "Todos los datos del usuario se perderán. ❗",
        },
      },
      helps: {
        title: "Centro de Ayuda ❓",
      },
      schedules: {
        title: "Agendamientos 🗓️",
        confirmationModal: {
          deleteTitle: "¿Eliminar este agendamiento? ⚠️",
          deleteMessage: "Acción irreversible. ❗",
        },
        table: {
          contact: "Contacto 👥",
          body: "Mensaje 💬",
          sendAt: "Fecha de agendamiento 🗓️",
          sentAt: "Fecha de envío 📤",
          status: "Estado 📊",
          actions: "Acciones 🛠️",
        },
        buttons: {
          add: "Nuevo Agendamiento ➕",
        },
        toasts: {
          deleted: "Agendamiento eliminado. 🗑️",
        },
      },
      tags: {
        title: "Etiquetas 🏷️",
        confirmationModal: {
          deleteTitle: "¿Eliminar esta etiqueta? ⚠️",
          deleteMessage: "Acción irreversible. ❗",
          deleteAllMessage: "¿Eliminar TODAS las etiquetas? 🗑️",
          deleteAllTitle: "Eliminar Todas 🗑️",
        },
        table: {
          name: "Nombre 📛",
          color: "Color 🎨",
          tickets: "Registros etiquetados 🎫",
          actions: "Acciones 🛠️",
        },
        buttons: {
          add: "Nueva Etiqueta ➕",
          deleteAll: "Eliminar Todas 🗑️",
        },
        toasts: {
          deletedAll: "¡Todas las etiquetas eliminadas! 🗑️",
          deleted: "Etiqueta eliminada. 🗑️",
        },
      },
      settings: {
        success: "Configuraciones guardadas. ✅",
        title: "Configuración ⚙️",
        settings: {
          userCreation: {
            name: "Creación de usuario 👤",
            options: {
              enabled: "Activado ✅",
              disabled: "Desactivado ❌",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado a: 👤",
          buttons: {
            return: "Regresar ↩️",
            resolve: "Resolver ✅",
            reopen: "Reabrir 🔄",
            accept: "Aceptar 👍",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Escribe un mensaje 💬",
        placeholderClosed: "Reabre este ticket para enviar mensajes. 🔓",
        signMessage: "Firmar ✍️",
      },
      contactDrawer: {
        header: "Datos del contacto 📋",
        buttons: {
          edit: "Editar contacto ✏️",
        },
        extraInfo: "Información adicional 📌",
      },
      fileModal: {
        title: {
          add: "Agregar lista de archivos 📂",
          edit: "Editar lista de archivos ✏️",
        },
        buttons: {
          okAdd: "Guardar 💾",
          okEdit: "Editar ✏️",
          cancel: "Cancelar ❌",
          fileOptions: "Agregar archivo ➕",
        },
        form: {
          name: "Nombre de la lista 📛",
          message: "Detalles de la lista 📝",
          fileOptions: "Archivos 📂",
          extraName: "Mensaje para enviar con archivo 💬",
          extraValue: "Valor de la opción 🔢",
        },
        success: "¡Lista de archivos guardada! ✅",
      },
      ticketOptionsMenu: {
        schedule: "Agendar 🗓️",
        delete: "Eliminar 🗑️",
        transfer: "Transferir 🔄",
        registerAppointment: "Observaciones del Contacto 📝",
        appointmentsModal: {
          title: "Observaciones del Contacto 📝",
          textarea: "Observación 📋",
          placeholder: "Registra información importante aquí 📌",
        },
        confirmationModal: {
          title: "Eliminar ticket 🗑️",
          titleFrom: "del contacto ",
          message: "¡Advertencia! Se perderán todos los mensajes relacionados. ⚠️",
        },
        buttons: {
          delete: "Eliminar 🗑️",
          cancel: "Cancelar ❌",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Confirmar ✔️",
          cancel: "Cancelar ❌",
        },
      },
      messageOptionsMenu: {
        delete: "Eliminar 🗑️",
        reactionSuccess: "Reacción agregada 🎉",
        reply: "Responder ↩️",
        edit: 'Editar Mensaje ✏️',
        forward: "Reenviar ➡️",
        toForward: "Reenviar ➡️",
        react: "Reaccionar 😃",
        confirmationModal: {
          title: "¿Eliminar mensaje? 🗑️",
          message: "Acción irreversible. ❗",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado. ⚠️",
        ERR_NO_DEF_WAPP_FOUND: "WhatsApp predeterminado no encontrado. Verifica conexiones. 🔍",
        ERR_WAPP_NOT_INITIALIZED: "Sesión de WhatsApp no inicializada. Verifica conexiones. 🔌",
        ERR_WAPP_CHECK_CONTACT: "Error al verificar contacto. Verifica conexiones. 🔍",
        ERR_WAPP_INVALID_CONTACT: "Número de WhatsApp inválido. ❌",
        ERR_WAPP_DOWNLOAD_MEDIA: "Error al descargar multimedia. Verifica conexiones. 📵",
        ERR_INVALID_CREDENTIALS: "Error de autenticación. Intenta nuevamente. 🔐",
        ERR_SENDING_WAPP_MSG: "Error al enviar mensaje. Verifica conexiones. 📨",
        ERR_DELETE_WAPP_MSG: "Error al eliminar mensaje. 🗑️",
        ERR_OTHER_OPEN_TICKET: "Ya existe un ticket abierto para este contacto. 🎫",
        ERR_SESSION_EXPIRED: "Sesión expirada. Vuelve a ingresar. ⏳",
        ERR_USER_CREATION_DISABLED: "Creación de usuarios deshabilitada por administrador. 👤❌",
        ERR_NO_PERMISSION: "Sin permisos para este recurso. 🚫",
        ERR_DUPLICATED_CONTACT: "Contacto duplicado. 👥",
        ERR_NO_SETTING_FOUND: "Configuración no encontrada. ⚙️",
        ERR_NO_CONTACT_FOUND: "Contacto no encontrado. 👤",
        ERR_NO_TICKET_FOUND: "Ticket no encontrado. 🎫",
        ERR_NO_USER_FOUND: "Usuario no encontrado. 👤",
        ERR_NO_WAPP_FOUND: "WhatsApp no encontrado. 📱",
        ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos. 💬❌",
        ERR_CREATING_TICKET: "Error al crear ticket en la base de datos. 🎫❌",
        ERR_FETCH_WAPP_MSG: "Error al recuperar mensaje antiguo de WhatsApp. ⌛",
        ERR_QUEUE_COLOR_ALREADY_EXISTS: "Color ya en uso. Elige otro. 🎨",
        ERR_WAPP_GREETING_REQUIRED: "Mensaje de bienvenida obligatorio con múltiples filas. 👋",
      },
    },
  },
};

export { messages };