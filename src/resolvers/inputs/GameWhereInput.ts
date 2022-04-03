import {Field, InputType} from 'type-graphql';
import {FloatFilter} from './filters/FloatFilter';
import {IntFilter} from './filters/IntFilter';
import {StringFilter} from './filters/StringFilter';

@InputType('GamesWhereInput', {
  isAbstract: true,
})
export class GamesWhereInput {
  @Field(_type => [GamesWhereInput], {
    nullable: true,
  })
  AND?: GamesWhereInput[] | undefined;

  @Field(_type => [GamesWhereInput], {
    nullable: true,
  })
  OR?: GamesWhereInput[] | undefined;

  @Field(_type => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @Field(_type => FloatFilter, {
    nullable: true,
  })
  aggregated_rating?: FloatFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true,
  })
  aggregated_rating_count?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
  })
  category?: StringFilter | undefined; // GAME CATEGORY ENUM

  @Field(_type => IntFilter, {
    nullable: true,
  })
  created_at?: IntFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true,
  })
  first_release_date?: IntFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true,
  })
  follows?: IntFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true,
  })
  hypes?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @Field(_type => FloatFilter, {
    nullable: true,
  })
  rating?: FloatFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true,
  })
  rating_count?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
  })
  slug?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
  })
  status?: StringFilter | undefined; //GAME STAUS ENUM

  @Field(_type => StringFilter, {
    nullable: true,
  })
  storyline?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
  })
  summary?: StringFilter | undefined;

  @Field(_type => FloatFilter, {
    nullable: true,
  })
  total_rating?: FloatFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true,
  })
  total_rating_count?: IntFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true,
  })
  updated_at?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
  })
  url?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
  })
  version_title?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
  })
  checksum?: StringFilter | undefined;
}
