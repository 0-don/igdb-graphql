import {Field, InputType} from 'type-graphql';
import { NestedDateTimeFilter } from './NestedDateTimeFilter';

@InputType('DateTimeFilter', {
  isAbstract: true,
})
export class DateTimeFilter {
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
