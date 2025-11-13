# tinto-image



<!-- Auto Generated Below -->


## Overview

<tinto-image>
- Image/media props + simple animations (spin/float/wobble/pulse)
- If placeholder exists, main image loads eagerly by default (fast swap)
- rounded="oval" => rounds TOP corners only (bottom corners are square)

## Properties

| Property          | Attribute           | Description                                              | Type                                                                                     | Default      |
| ----------------- | ------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------ |
| `alt`             | `alt`               |                                                          | `string`                                                                                 | `undefined`  |
| `animation`       | `animation`         |                                                          | `"" \| "float" \| "pulse" \| "spin" \| "wobble"`                                         | `''`         |
| `as`              | `as`                | as="button" support                                      | `"button"`                                                                               | `undefined`  |
| `background`      | `background`        |                                                          | `string`                                                                                 | `undefined`  |
| `border`          | `border`            |                                                          | `string`                                                                                 | `undefined`  |
| `crossorigin`     | `crossorigin`       |                                                          | `string`                                                                                 | `undefined`  |
| `decoding`        | `decoding`          |                                                          | `"async" \| "auto" \| "sync"`                                                            | `'async'`    |
| `disabled`        | `disabled`          |                                                          | `boolean`                                                                                | `false`      |
| `download`        | `download`          |                                                          | `string`                                                                                 | `undefined`  |
| `duration`        | `duration`          | seconds (e.g., 20)                                       | `number`                                                                                 | `20`         |
| `fit`             | `fit`               |                                                          | `"contain" \| "cover" \| "fill" \| "none" \| "scale-down"`                               | `'cover'`    |
| `height`          | `height`            |                                                          | `string`                                                                                 | `undefined`  |
| `href`            | `href`              | Wrap with anchor when href provided                      | `string`                                                                                 | `undefined`  |
| `loading`         | `loading`           | Loading policy                                           | `"eager" \| "lazy"`                                                                      | `undefined`  |
| `pauseOnHover`    | `pause-on-hover`    | pause on hover                                           | `boolean`                                                                                | `false`      |
| `placeholder`     | `placeholder`       | Blurred/low-res placeholder URL                          | `string`                                                                                 | `undefined`  |
| `play`            | `play`              |                                                          | `boolean`                                                                                | `true`       |
| `position`        | `position`          |                                                          | `string`                                                                                 | `'50% 50%'`  |
| `priority`        | `priority`          | Priority: eager + inject <link rel="preload" as="image"> | `boolean`                                                                                | `false`      |
| `radius`          | `radius`            | If radius exists, it overrides rounded preset            | `string`                                                                                 | `undefined`  |
| `ratio`           | `ratio`             | "w:h", e.g. "16:9", "1:1"                                | `string`                                                                                 | `'16:9'`     |
| `referrerpolicy`  | `referrerpolicy`    |                                                          | `string`                                                                                 | `undefined`  |
| `rel`             | `rel`               |                                                          | `string`                                                                                 | `undefined`  |
| `repeat`          | `repeat`            | 'infinite' or finite count (string/number)               | `number \| string`                                                                       | `'infinite'` |
| `rotate`          | `rotate`            |                                                          | `"left" \| "right"`                                                                      | `'right'`    |
| `rounded`         | `rounded`           |                                                          | `"base" \| "circle" \| "diagonal" \| "full" \| "lr" \| "oval" \| "soft" \| "t" \| "top"` | `undefined`  |
| `shadow`          | `shadow`            |                                                          | `string`                                                                                 | `undefined`  |
| `sizes`           | `sizes`             |                                                          | `string`                                                                                 | `undefined`  |
| `src`             | `src`               |                                                          | `string`                                                                                 | `undefined`  |
| `srcset`          | `srcset`            | Responsive images                                        | `string`                                                                                 | `undefined`  |
| `startOnViewport` | `start-on-viewport` | play/pause on viewport                                   | `boolean`                                                                                | `false`      |
| `target`          | `target`            |                                                          | `string`                                                                                 | `undefined`  |
| `width`           | `width`             | Host box size (CSS inline/block size)                    | `string`                                                                                 | `undefined`  |


## Events

| Event          | Description | Type                                  |
| -------------- | ----------- | ------------------------------------- |
| `tinto:error`  |             | `CustomEvent<TintoImageErrorDetail>`  |
| `tinto:loaded` |             | `CustomEvent<TintoImageLoadedDetail>` |
| `tinto:press`  |             | `CustomEvent<TintoImagePressDetail>`  |


## Shadow Parts

| Part            | Description |
| --------------- | ----------- |
| `"button"`      |             |
| `"frame"`       |             |
| `"img"`         |             |
| `"layer"`       |             |
| `"link"`        |             |
| `"placeholder"` |             |
| `"plain"`       |             |
| `"spacer"`      |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
