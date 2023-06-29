import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Rol} from '../models';
import {RolRepository} from './rol.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype._id,
  UsuarioRelations
> {

  public readonly tiene_un: BelongsToAccessor<Rol, typeof Usuario.prototype._id>;

  /**
**Relación que ya habia sido creada y se debe de corregir

  public readonly tiene_un: HasOneRepositoryFactory<Rol, typeof Usuario.prototype._id>;
*/

  /**
  **Relación de rol creada por error

  public readonly rol: HasOneRepositoryFactory<Rol, typeof Usuario.prototype._id>;
*/
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
    @repository.getter('RolRepository')
    protected rolRepositoryGetter: Getter<RolRepository>,
  ) {
    super(Usuario, dataSource);
    this.tiene_un = this.createBelongsToAccessorFor('tiene_un', rolRepositoryGetter,);
    this.registerInclusionResolver('tiene_un', this.tiene_un.inclusionResolver);
    /**
   *
   **relacion de rol creada por error

    this.rol = this.createHasOneRepositoryFactoryFor('rol', rolRepositoryGetter);
    this.registerInclusionResolver('rol', this.rol.inclusionResolver);

    **Relacioón de tiene un rol

    this.tiene_un = this.createHasOneRepositoryFactoryFor('tiene_un', rolRepositoryGetter);
    this.registerInclusionResolver('tiene_un', this.tiene_un.inclusionResolver);
    */
  }
}
