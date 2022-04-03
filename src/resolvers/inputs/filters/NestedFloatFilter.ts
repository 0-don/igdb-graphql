import {Field, Float, InputType} from 'type-graphql';

@InputType('NestedFloatFilter', {
  isAbstract: true,
})
export class NestedFloatFilter {
  @Field(_type => Float, {
    nullable: true,
  })
  equals?: number | undefined;

  @Field(_type => [Float], {
    nullable: true,
  })
  in?: number[] | undefined;

  @Field(_type => [Float], {
    nullable: true,
  })
  notIn?: number[] | undefined;

  @Field(_type => Float, {
    nullable: true,
  })
  lt?: number | undefined;

  @Field(_type => Float, {
    nullable: true,
  })
  lte?: number | undefined;

  @Field(_type => Float, {
    nullable: true,
  })
  gt?: number | undefined;

  @Field(_type => Float, {
    nullable: true,
  })
  gte?: number | undefined;

  @Field(_type => NestedFloatFilter, {
    nullable: true,
  })
  not?: NestedFloatFilter | undefined;
}
