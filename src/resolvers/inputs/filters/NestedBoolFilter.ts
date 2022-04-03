import {Field, InputType} from 'type-graphql';

@InputType('NestedBoolFilter', {
  isAbstract: true,
})
export class NestedBoolFilter {
  @Field(_type => Boolean, {
    nullable: true,
  })
  equals?: boolean | undefined;

  @Field(_type => NestedBoolFilter, {
    nullable: true,
  })
  not?: NestedBoolFilter | undefined;
}
