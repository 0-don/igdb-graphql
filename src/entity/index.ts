import { AgeRating } from "./AgeRating";
import { AgeRatingContentDescription } from "./AgeRatingContentDescription";
import { AlternativeName } from "./AlternativeName";
import { Artwork } from "./Artworks";
import { Collection } from "./Collection";
import { Company } from "./Company/Company";
import { CompanyLogo } from "./Company/CompanyLogo";
import { CompanyWebsite } from "./Company/CompanyWebsite";
import { InvolvedCompany } from "./Company/InvolvedCompany";
import { Cover } from "./Cover";
import { Franchise } from "./Franchise";
import { ExternalGame } from "./Game/ExternalGame";
import { Game } from "./Game/Game";
import { GameEngine } from "./Game/GameEngine";
import { GameEngineLogo } from "./Game/GameEngineLogo";
import { GameMode } from "./Game/GameMode";
import { GameVideo } from "./Game/GameVideo";
import { Genre } from "./Genre";
import { Keyword } from "./Keyword";
import { MultiplayerMode } from "./MultiplayerMode";
import { Platform } from "./Platform/Platform";
import { PlatformFamily } from "./Platform/PlatformFamily";
import { PlatformLogo } from "./Platform/PlatformLogo";
import { PlatformVersion } from "./Platform/PlatformVersion";
import { PlatformVersionCompany } from "./Platform/PlatformVersionCompany";
import { PlatformWebsite } from "./Platform/PlatformWebsite";
import { PlayerPerspective } from "./PlayerPerspective";
import { ReleaseDate } from "./ReleaseDate";
import { Screenshot } from "./Screenshot";
import { Theme } from "./Theme";
import { Website } from "./Website";

export const CompanyEntities = [
  Company,
  CompanyLogo,
  CompanyWebsite,
  InvolvedCompany,
] as const;

export const GameEntities = [
  ExternalGame,
  Game,
  GameEngine,
  GameEngineLogo,
  GameMode,
  GameVideo,
] as const;

export const PlatformEntities = [
  Platform,
  PlatformFamily,
  PlatformLogo,
  PlatformVersion,
  PlatformVersionCompany,
  PlatformWebsite,
] as const;

export const Entities = [
  AgeRating,
  AgeRatingContentDescription,
  AlternativeName,
  Artwork,
  Collection,
  Cover,
  Franchise,
  Genre,
  Keyword,
  MultiplayerMode,
  PlayerPerspective,
  ReleaseDate,
  Screenshot,
  Theme,
  Website,
] as const;
