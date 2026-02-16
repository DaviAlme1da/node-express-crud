import Perfil from "./perfilModel.js";
import Usuario from "./userlModel.js";

Perfil.hasMany(Usuario, {
  foreignKey: "idPerfil"
});

Usuario.belongsTo(Perfil, {
  foreignKey: "idPerfil"
});