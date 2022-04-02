import {NonEmptyArray} from 'type-graphql';
import {AgeRatingContentDescriptionResolver} from './AgeRatingContentDescriptionResolver';
import {AgeRatingResolver} from './AgeRatingResolver';
import {AlternativeNameResolver} from './AlternativeNameResolver';
import {ArtworkResolver} from './ArtworkResolver';
import {CollectionResolver} from './CollectionResolver';
import {CompanyLogoResolver} from './Company/CompanyLogoResolver';
import {CompanyResolver} from './Company/CompanyResolver';
import {CompanyWebsiteResolver} from './Company/CompanyWebsiteResolver';
import {InvolvedCompanyResolver} from './Company/InvolvedCompany';
import {CoverResolver} from './CoverResolver';
import {FranchiseResolver} from './FranchiseResolver';
import {ExternalGameResolver} from './Game/ExternalGameResolver';
import {GameEngineLogoResolver} from './Game/GameEngineLogoResolver';
import {GameEngineResolver} from './Game/GameEngineResolver';
import {GameModeResolver} from './Game/GameModeResolver';
import {GameResolver} from './Game/GameResolver';
import {GameVideoResolver} from './Game/GameVideoResolver';
import {GenreResolver} from './GenresResolver';
import {KeywordResolver} from './KeywordResolver';
import {MultiplayerModeResolver} from './MultiplayerModeResolver';
import {PlatformFamilyResolver} from './Platform/PlatformFamilyResolver';
import {PlatformLogoResolver} from './Platform/PlatformLogoResolver';
import {PlatformResolver} from './Platform/PlatformResolver';
import {PlatformVersionCompanyResolver} from './Platform/PlatformVersionCompanyResolver';
import {PlatformVersionReleaseDateResolver} from './Platform/PlatformVersionReleaseDateResolver';
import {PlatformVersionResolver} from './Platform/PlatformVersionResolver';
import {PlatformWebsiteResolver} from './Platform/PlatformWebsiteResolver';
import {PlayerPerspectiveResolver} from './PlayerPerspectiveResolver';
import {ReleaseDateResolver} from './ReleaseDateResolver';
import {ScreenshotResolver} from './ScreenshotResolver';
import {ThemeResolver} from './ThemeResolver';
import {WebsiteResolver} from './WebsiteResolver';

export default [
  CompanyLogoResolver,
  CompanyResolver,
  CompanyWebsiteResolver,
  InvolvedCompanyResolver,

  ExternalGameResolver,
  GameEngineLogoResolver,
  GameEngineResolver,
  GameModeResolver,
  GameResolver,
  GameVideoResolver,

  PlatformFamilyResolver,
  PlatformLogoResolver,
  PlatformResolver,
  PlatformVersionCompanyResolver,
  PlatformVersionReleaseDateResolver,
  PlatformVersionResolver,
  PlatformWebsiteResolver,

  AgeRatingContentDescriptionResolver,
  AgeRatingResolver,
  AlternativeNameResolver,
  ArtworkResolver,
  CollectionResolver,
  CoverResolver,
  FranchiseResolver,
  GenreResolver,
  KeywordResolver,
  MultiplayerModeResolver,
  PlayerPerspectiveResolver,
  ReleaseDateResolver,
  ScreenshotResolver,
  ThemeResolver,
  WebsiteResolver,
] as NonEmptyArray<Function>;
