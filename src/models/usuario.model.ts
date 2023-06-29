import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'boolean',
    default: true,
  })
  estado?: boolean;

  /**
   **relacion posiblemente erronea.
   *parece ser que esta propiedad no hace parte del modelo y va a ser necesario volver a establecer las relaciones en el controlador

   @hasOne(() => Rol, {keyTo: 'id_rol'})
  tiene_un: Rol;
  */
  @property({
    type: 'string',
  })
  id_rol?: string;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
