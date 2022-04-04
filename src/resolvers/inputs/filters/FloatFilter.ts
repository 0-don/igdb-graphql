import {Field, Float, InputType} from 'type-graphql';

@InputType('FloatFilter', {
  isAbstract: true,
})
export class FloatFilter {
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

  @Field(_type => Float, {
    nullable: true,
  })
  contains?: number | undefined;

  @Field(_type => Float, {
    nullable: true,
  })
  startsWith?: number | undefined;

  @Field(_type => Float, {
    nullable: true,
  })
  endsWith?: number | undefined;

  @Field(_type => Float, {
    nullable: true,
  })
  not?: number | undefined;
}
