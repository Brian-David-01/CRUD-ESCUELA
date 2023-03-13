import Alumnos from "../models/Alumnos";

export const renderAlumnos = async (req,res)=> {
    const alumnos = await Alumnos.find().lean();
    res.render("index", {alumnos: alumnos});
};

export const createAlumnos = async (req, res)=>{
    try {
        const alumnos = Alumnos(req.body);

        await alumnos.save();
        res.redirect("/agregarAlumnos");
    } catch (error) {
        console.log(error);
    }
};

export const agregarAlumnos = async (req,res)=> {
    const alumnos = await Alumnos.find().lean();

    res.render("agregarAlumno", { alumnos: alumnos});
};

export const renderEditAlumnos = async (req,res)=> {
    try {
        const alumnos = await Alumnos.findById(req.params.id).lean();
        res.render("editarAlumnos", {alumnos});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateAlunnos = async (req, res) => {
    const {id} = req.params;
    await Alumnos.findByIdAndUpdate(id, req.body);

    res.redirect("/agregarAlumnos");
};

export const deleteAlumnos = async (req, res) => {
    const {id} = req.params;
    await Alumnos.findByIdAndDelete(id);

    res.redirect("/agregarAlumnos");
};

export const statusAlumno = async (req, res) => {
    const {id} = req.params;
    const alumnos = await Alumnos.findById(id);

    // Opción esta en model
    alumnos.opcion = !alumnos.opcion
    await alumnos.save();
    res.redirect("/agregarAlumnos");
};