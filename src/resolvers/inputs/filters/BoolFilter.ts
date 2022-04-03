import {Field, InputType} from 'type-graphql';
import {NestedBoolFilter} from './NestedBoolFilter';

@InputType('BoolFilter', {
  isAbstract: true,
})
export class BoolFilter {
  @Field(_type => Boolean, {
    nullable: true,
  })
  equals?: boolean | undefined;

  @Field(_type => NestedBoolFilter, {
    nullable: true,
  })
  not?: NestedBoolFilter | undefined;
}
