import {Field, InputType} from 'type-graphql';

@InputType('NestedDateTimeFilter', {
  isAbstract: true,
})
export class NestedDateTimeFilter {
  @Field(_type => Date, {
    nullable: true,
  })
  equals?: Date | undefined;

  @Field(_type => [Date], {
    nullable: true,
  })
  in?: Date[] | undefined;

  @Field(_type => [Date], {
    nullable: true,
  })
  notIn?: Date[] | undefined;

  @Field(_type => Date, {
    nullable: true,
  })
  lt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true,
  })
  lte?: Date | undefined;

  @Field(_type => Date, {
    nullable: true,
  })
  gt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true,
  })
  gte?: Date | undefined;

  @Field(_type => NestedDateTimeFilter, {
    nullable: true,
  })
  not?: NestedDateTimeFilter | undefined;
}
