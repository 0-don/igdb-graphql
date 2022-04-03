import {Field, InputType} from 'type-graphql';
import {SortOrder} from '../../@types/enum';

@InputType('GamesSortInput', {
  isAbstract: true,
})
export class GamesSortInput {
  @Field(_type => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  aggregated_rating?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  aggregated_rating_count?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  category?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  created_at?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  first_release_date?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  follows?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  hypes?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  name?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  rating?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  rating_count?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  slug?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  status?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  storyline?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  summary?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  tags?: 'asc' | 'desc' | undefined; // ARRAY

  @Field(_type => SortOrder, {
    nullable: true,
  })
  total_rating?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  total_rating_count?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  updated_at?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  url?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  version_title?: 'asc' | 'desc' | undefined;

  @Field(_type => SortOrder, {
    nullable: true,
  })
  checksum?: 'asc' | 'desc' | undefined;
}
