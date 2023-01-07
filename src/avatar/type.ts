/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { BadgeProps } from '../badge/index';

export interface TdAvatarProps {
  /**
   * 头像替换文本，仅当图片加载失败时有效
   * @default ''
   */
  alt?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字
   */
  badgeProps?: {
    type: ObjectConstructor;
    value?: BadgeProps;
  };
  /**
   * 是否显示外边框
   * @default false
   */
  bordered?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，用于设置组件外层元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-image', 't-class-icon', 't-class-alt', 't-class-content'];
  };
  /**
   * 加载失败时隐藏图片
   * @default false
   */
  hideOnLoadFailed?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 图标。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`。
   */
  icon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 图片地址
   * @default ''
   */
  image?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 透传至 Image 组件
   */
  imageProps?: {
    type: ObjectConstructor;
    value?: object;
  };
  /**
   * 形状
   * @default circle
   */
  shape?: {
    type: StringConstructor;
    value?: ShapeEnum;
  };
  /**
   * 尺寸，示例值：small/medium/large/24px/38px 等
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: string;
  };
}

export interface TdAvatarGroupProps {
  /**
   * 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上
   * @default 'right-up'
   */
  cascading?: {
    type: StringConstructor;
    value?: CascadingValue;
  };
  /**
   * 头像数量超出时，会出现一个头像折叠元素。该元素内容可自定义。默认为 `+N`。示例：`+5`，`...`, `更多`
   */
  collapseAvatar?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，用于设置组件外层元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-image', 't-class-content'];
  };
  /**
   * 能够同时显示的最多头像数量
   */
  max?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: string;
  };
}

export type ShapeEnum = 'circle' | 'round';

export type CascadingValue = 'left-up' | 'right-up';
