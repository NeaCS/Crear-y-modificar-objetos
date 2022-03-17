//función constructora de consultorio

function Consultorio (nombre, paciente) {
    var _nombre = nombre;
	var _paciente = paciente || []

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre;
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre; 
        }
        
    })

    Object.defineProperty(this, "_getPaciente", {
        get: function () {
            return _paciente
        }
    })

    Object.defineProperty(this, "_setPaciente", {
        set: function (paciente) {
            _paciente = paciente; 
        }
        
    })

    // getters y setters de consultorio 

    Consultorio.prototype.getNombre = function () {
        return this._getNombre
    }

    Consultorio.prototype.setNombre = function (nombre) {
        this._setNombre = nombre
    }

    Consultorio.prototype.getPaciente = function () {
        return this._getPaciente
    }

    Consultorio.prototype.setPaciente = function (paciente) {
        this._setPaciente = paciente
    }

}

// Función contructora de pacientes 

function Paciente (nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad; 
    var _rut = rut;
    var _diagnostico = diagnostico; 

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre;
        }
    })

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
        }
    })

    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return _edad;
        }
    })

    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            _edad = edad;
        }
    })

    Object.defineProperty(this, "_getRut", {
        get: function () {
            return _rut;
        }
    })

    Object.defineProperty(this, "_setRut", {
        set: function (rut) {
            _rut = rut;
        }
    })

    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return _diagnostico;
        }
    })

    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            _diagnostico = diagnostico;
        }
    })

}

// GETTERS Y SETTERS DE PACIENTES
    Paciente.prototype.getNombre = function () {
        return this._getNombre;
    };
    Paciente.prototype.setNombre = function (nombre) {
        this._setNombre = nombre;
    };

    Paciente.prototype.getEdad = function () {
        return this._getEdad;
    };
    Paciente.prototype.setEdad = function (edad) {
        this._setEdad = edad;
    };

    Paciente.prototype.getRut = function () {
        return this._getRut;
    };
    Paciente.prototype.setRut = function (rut) {
        this._setRut = rut;
    };

    Paciente.prototype.getDiagnostico = function () {
        return this._getDiagnostico;
    };
    Paciente.prototype.setDiagnostico = function (diagnostico) {
        this._setDiagnostico = diagnostico;
    };


    

// Instancia Pacientes
paciente1 = new Paciente("Naldi", 33, "17.127.895-3", "Alergia");
paciente2 = new Paciente("Ringo", 21, "17.127.895-3", "Rinitis");
paciente3 = new Paciente("Juan", 42, "17.127.895-3", "Gastritis");
paciente4 = new Paciente("Karina", 34, "17.127.895-3", "Tendinitis");
paciente5 = new Paciente("Ramón", 54, "17.127.895-3", "Cardiopatías");


// Instancia consultorio
consultorio1 = new Consultorio("Consultorio central", [paciente1, paciente2, paciente3, paciente4, paciente5])


// Agregar función por prototype para mostrar todos los pacientes por consola
Consultorio.prototype.mostrarPacientes = function () {
	this._getPaciente.forEach((paciente) => {
		console.log("Nombre: " + paciente._getNombre);
		console.log("Edad: " + paciente._getEdad);
		console.log("Rut: " + paciente._getRut);
		console.log("Diagnostico: " + paciente._getDiagnostico);

        })},

consultorio1.mostrarPacientes() 

// Agregar función por prototype para buscar los usuarios por nombre

Consultorio.prototype.filtrarPaciente = function (nombre) {
	this._getPaciente.filter((paciente) => paciente._getNombre == nombre).forEach((paciente) => {
			console.log("Nombre: " + paciente._getNombre);
			console.log("Edad: " + paciente._getEdad);
			console.log("Rut: " + paciente._getRut);
			console.log("Diagnostico: " + paciente._getDiagnostico);

		});
    }



    consultorio1.filtrarPaciente("Naldi")
