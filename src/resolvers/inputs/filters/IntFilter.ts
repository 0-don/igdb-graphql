import {Field, InputType, Int} from 'type-graphql';

@InputType('IntFilter', {
  isAbstract: true,
})
export class IntFilter {
  @Field(_type => Int, {
    nullable: true,
  })
  equals?: number | undefined;

  @Field(_type => [Int], {
    nullable: true,
  })
  in?: number[] | undefined;

  @Field(_type => [Int], {
    nullable: true,
  })
  notIn?: number[] | undefined;

  @Field(_type => Int, {
    nullable: true,
  })
  lt?: number | undefined;

  @Field(_type => Int, {
    nullable: true,
  })
  lte?: number | undefined;

  @Field(_type => Int, {
    nullable: true,
  })
  gt?: number | undefined;

  @Field(_type => Int, {
    nullable: true,
  })
  gte?: number | undefined;

  @Field(_type => Int, {
    nullable: true,
  })
  contains?: number | undefined;

  @Field(_type => Int, {
    nullable: true,
  })
  startsWith?: number | undefined;

  @Field(_type => Int, {
    nullable: true,
  })
  endsWith?: number | undefined;

  @Field(_type => Int, {
    nullable: true,
  })
  not?: number | undefined;
}
