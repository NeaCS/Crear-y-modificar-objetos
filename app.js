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

var consultorio1 = new Consultorio ("Ñuñoa", "Pedrito PEREZ");

console.log(consultorio1.getPaciente())

consultorio1.setPaciente("Nea");

console.log(consultorio1.getPaciente())