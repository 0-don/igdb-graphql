import {Field, ID, ObjectType} from 'type-graphql';
import {Company} from '../Company/Company';

@ObjectType()
export class PlatformVersionCompany {
  @Field(() => ID)
  id: number;

  @Field({nullable: true})
  comment?: string;

  @Field(() => Company, {nullable: true})
  company?: Company;

  @Field(() => Boolean, {nullable: true})
  developer?: boolean;

  @Field(() => Boolean, {nullable: true})
  manufacturer?: boolean;

  @Field({nullable: true})
  checksum?: string;
}
