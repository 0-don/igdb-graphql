import {Field, InputType} from 'type-graphql';

@InputType('BoolFilter', {
  isAbstract: true,
})
export class BoolFilter {
  @Field(_type => Boolean, {
    nullable: true,
  })
  equals?: boolean | undefined;

  @Field(_type => Boolean, {
    nullable: true,
  })
  not?: boolean | undefined;
}
