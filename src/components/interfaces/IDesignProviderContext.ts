import {
  AvatarsProps,
  FlexItemProps,
  FlexProps,
  SpaceProps,
  TagInputProps,
} from "..";

export default interface IDesignProviderContext {
  avatarsProps?: Partial<AvatarsProps>;
  flexProps?: Partial<FlexProps>;
  flexItemProps?: Partial<FlexItemProps>;
  spaceProps?: Partial<SpaceProps>;
  tagInputProps?: Partial<TagInputProps>;
}
