import DataLoader from 'dataloader';
import {fields, igdb, where, WhereFlags} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {Loader} from 'type-graphql-dataloader';
import {AgeRating} from '../entity/AgeRating';
import {AlternativeName} from '../entity/AlternativeName';
import {Artwork} from '../entity/Artworks';
import {Collection} from '../entity/Collection';
import {InvolvedCompany} from '../entity/Company/InvolvedCompany';
import {Cover} from '../entity/Cover';
import {Franchise} from '../entity/Franchise';
import {ExternalGame} from '../entity/Game/ExternalGame';
import {Game} from '../entity/Game/Game';
import {GameEngine} from '../entity/Game/GameEngine';
import {GameMode} from '../entity/Game/GameMode';
import {GameVideo} from '../entity/Game/GameVideo';
import {Genre} from '../entity/Genre';
import {Keyword} from '../entity/Keyword';
import {Platform} from '../entity/Platform/Platform';
import {PlayerPerspective} from '../entity/PlayerPerspective';
import {ReleaseDate} from '../entity/ReleaseDate';
import {Screenshot} from '../entity/Screenshot';
import {Theme} from '../entity/Theme';
import {Website} from '../entity/Website';
import {CheckToken} from '../utils/tokenMiddleware';
import {loaderResolver, RLoader} from '../utils/utils';

@Resolver(() => Game)
export class GameResolver {
  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async age_ratings => await loaderResolver(age_ratings, 'age_ratings'),
  )
  async age_ratings(@Root() {id, age_ratings}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, AgeRating[]>) =>
      dataloader.load({id, ids: age_ratings as unknown as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async alternative_names =>
      await loaderResolver(alternative_names, 'alternative_names'),
  )
  async alternative_names(@Root() {id, alternative_names}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, AlternativeName[]>) =>
      dataloader.load({id, ids: alternative_names as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async artworks => await loaderResolver(artworks, 'artworks'),
  )
  async artworks(@Root() {id, artworks}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Artwork[]>) =>
      dataloader.load({id, ids: artworks as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async bundles => await loaderResolver(bundles, 'games'),
  )
  async bundles(@Root() {id, bundles}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Game[]>) =>
      dataloader.load({id, ids: bundles as unknown as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number>, RawRoutes[]>(
    async collection => await loaderResolver(collection, 'collections'),
  )
  async collection(@Root() {id, collection}: Game) {
    return (dataloader: DataLoader<RLoader<number>, Collection[]>) =>
      dataloader.load({id, ids: collection as number});
  }

  @FieldResolver()
  @Loader<RLoader<number>, RawRoutes[]>(
    async cover => await loaderResolver(cover, 'covers'),
  )
  async cover(@Root() {id, cover}: Game) {
    return (dataloader: DataLoader<RLoader<number>, Cover[]>) =>
      dataloader.load({id, ids: cover as number});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async dlcs => await loaderResolver(dlcs, 'games'),
  )
  async dlcs(@Root() {id, dlcs}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Game[]>) =>
      dataloader.load({id, ids: dlcs as unknown as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async expansions => await loaderResolver(expansions, 'games'),
  )
  async expansions(@Root() {id, expansions}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Game[]>) =>
      dataloader.load({id, ids: expansions as unknown as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async external_games =>
      await loaderResolver(external_games, 'external_games'),
  )
  async external_games(@Root() {id, external_games}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, ExternalGame[]>) =>
      dataloader.load({id, ids: external_games as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number>, RawRoutes[]>(
    async franchise => await loaderResolver(franchise, 'franchises'),
  )
  async franchise(@Root() {id, franchise}: Game) {
    return (dataloader: DataLoader<RLoader<number>, Franchise[]>) =>
      dataloader.load({id, ids: franchise as number});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async franchises => await loaderResolver(franchises, 'franchises'),
  )
  async franchises(@Root() {id, franchises}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Franchise[]>) =>
      dataloader.load({id, ids: franchises as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async gameEnginesIds =>
      await loaderResolver(gameEnginesIds, 'game_engines'),
  )
  async game_engines(@Root() {id, game_engines}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, GameEngine[]>) =>
      dataloader.load({id, ids: game_engines as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async game_modes => await loaderResolver(game_modes, 'game_modes'),
  )
  async game_modes(@Root() {id, game_modes}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, GameMode[]>) =>
      dataloader.load({id, ids: game_modes as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async genres => await loaderResolver(genres, 'genres'),
  )
  async genres(@Root() {id, genres}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Genre[]>) =>
      dataloader.load({id, ids: genres as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async involved_companies =>
      await loaderResolver(involved_companies, 'involved_companies'),
  )
  async involved_companies(@Root() {id, involved_companies}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, InvolvedCompany[]>) =>
      dataloader.load({id, ids: involved_companies as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async keywords => await loaderResolver(keywords, 'keywords'),
  )
  async keywords(@Root() {id, keywords}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Keyword[]>) =>
      dataloader.load({id, ids: keywords as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async multiplayer_modes =>
      await loaderResolver(multiplayer_modes, 'multiplayer_modes'),
  )
  async multiplayer_modes(@Root() {id, multiplayer_modes}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Keyword[]>) =>
      dataloader.load({id, ids: multiplayer_modes as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number>, RawRoutes[]>(
    async parent_game => await loaderResolver(parent_game, 'games'),
  )
  async parent_game(@Root() {id, parent_game}: Game) {
    return (dataloader: DataLoader<RLoader<number>, Game[]>) =>
      dataloader.load({id, ids: parent_game as unknown as number});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async platforms => await loaderResolver(platforms, 'platforms'),
  )
  async platforms(@Root() {id, platforms}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Platform[]>) =>
      dataloader.load({id, ids: platforms as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async player_perspectives =>
      await loaderResolver(player_perspectives, 'player_perspectives'),
  )
  async player_perspectives(@Root() {id, player_perspectives}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, PlayerPerspective[]>) =>
      dataloader.load({id, ids: player_perspectives as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async release_dates => await loaderResolver(release_dates, 'release_dates'),
  )
  async release_dates(@Root() {id, release_dates}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, ReleaseDate[]>) =>
      dataloader.load({id, ids: release_dates as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async screenshots => await loaderResolver(screenshots, 'screenshots'),
  )
  async screenshots(@Root() {id, screenshots}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Screenshot[]>) =>
      dataloader.load({id, ids: screenshots as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async similar_games => await loaderResolver(similar_games, 'games'),
  )
  async similar_games(@Root() {id, similar_games}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Game[]>) =>
      dataloader.load({id, ids: similar_games as unknown as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async standalone_expansions =>
      await loaderResolver(standalone_expansions, 'games'),
  )
  async standalone_expansions(@Root() {id, standalone_expansions}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Game[]>) =>
      dataloader.load({
        id,
        ids: standalone_expansions as unknown as number[],
      });
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async themes => await loaderResolver(themes, 'themes'),
  )
  async themes(@Root() {id, themes}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Theme[]>) =>
      dataloader.load({id, ids: themes as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async videos => await loaderResolver(videos, 'game_videos'),
  )
  async videos(@Root() {id, videos}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, GameVideo[]>) =>
      dataloader.load({id, ids: videos as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async websites => await loaderResolver(websites, 'websites'),
  )
  async websites(@Root() {id, websites}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Website[]>) =>
      dataloader.load({id, ids: websites as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async remakes => await loaderResolver(remakes, 'games'),
  )
  async remakes(@Root() {id, remakes}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Game[]>) =>
      dataloader.load({id, ids: remakes as unknown as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async remasters => await loaderResolver(remasters, 'games'),
  )
  async remasters(@Root() {id, remasters}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Game[]>) =>
      dataloader.load({id, ids: remasters as unknown as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async expanded_games => await loaderResolver(expanded_games, 'games'),
  )
  async expanded_games(@Root() {id, expanded_games}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Game[]>) =>
      dataloader.load({id, ids: expanded_games as unknown as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async ports => await loaderResolver(ports, 'games'),
  )
  async ports(@Root() {id, ports}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Game[]>) =>
      dataloader.load({id, ids: ports as unknown as number[]});
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async forks => await loaderResolver(forks, 'games'),
  )
  async forks(@Root() {id, forks}: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Game[]>) =>
      dataloader.load({id, ids: forks as unknown as number[]});
  }

  @Query(() => [Game], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async games() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('games')
      .pipe(fields(['*']), where('name', '=', 'cs', WhereFlags.CONTAINS))
      .execute();

    // console.log(data);
    return data;
  }
}
