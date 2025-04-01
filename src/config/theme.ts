import type { IConfigOption, Theme } from '@/types'

import { toMerged } from 'es-toolkit'

// 默认主题
const defaultTheme: Theme = {
  base: {
    '--md-primary-color': `#000000`,
    'text-align': `left`,
    'line-height': `1.75`,
  },
  block: {
    container: {},
    // 一级标题
    h1: {
      'display': `table`,
      'padding': `0 1em`,
      'border-bottom': `2px solid var(--md-primary-color)`,
      'margin': `2em auto 1em`,
      'color': `hsl(var(--foreground))`,
      'font-size': `1.6em`,
      'font-weight': `bold`,
      'text-align': `center`,
    },

    // 二级标题
    h2: {
      'display': `table`,
      'padding': `0.2em 1em`,
      'margin': `4em auto 2em`,
      'color': `#fff`,
      'background': `var(--md-primary-color)`,
      'font-size': `1.2em`,
      'font-weight': `bold`,
      'text-align': `center`,
    },

    // 三级标题
    h3: {
      'padding-left': `8px`,
      'border-left': `3px solid var(--md-primary-color)`,
      'margin': `2em 8px 0.75em 0`,
      'color': `hsl(var(--foreground))`,
      'font-size': `1.1em`,
      'font-weight': `bold`,
      'line-height': `1.2`,
    },

    // 四级标题
    h4: {
      'margin': `2em 8px 0.5em`,
      'color': `var(--md-primary-color)`,
      'font-size': `1em`,
      'font-weight': `bold`,
    },

    // 五级标题
    h5: {
      'margin': `1.5em 8px 0.5em`,
      'color': `var(--md-primary-color)`,
      'font-size': `1em`,
      'font-weight': `bold`,
    },

    // 六级标题
    h6: {
      'margin': `1.5em 8px 0.5em`,
      'font-size': `1em`,
      'color': `var(--md-primary-color)`,
    },

    // 段落
    p: {
      'margin': `1.5em 8px`,
      'letter-spacing': `0.1em`,
      'color': `hsl(var(--foreground))`,
    },

    // 引用
    blockquote: {
      'font-style': `normal`,
      'padding': `1em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-radius': `6px`,
      'color': `rgba(0,0,0,0.5)`,
      'background': `var(--blockquote-background)`,
      'margin-bottom': `1em`,
    },

    // 引用内容
    blockquote_p: {
      'display': `block`,
      'font-size': `1em`,
      'letter-spacing': `0.1em`,
      'color': `hsl(var(--foreground))`,
    },

    blockquote_note: {
    },

    blockquote_tip: {
    },

    blockquote_important: {
    },

    blockquote_warning: {
    },

    blockquote_caution: {
    },

    // GFM 警告块标题
    blockquote_title: {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
      'margin-bottom': `0.5em`,
    },

    blockquote_title_note: {
      color: `#478be6`,
    },

    blockquote_title_tip: {
      color: `#57ab5a`,
    },

    blockquote_title_important: {
      color: `#986ee2`,
    },

    blockquote_title_warning: {
      color: `#c69026`,
    },

    blockquote_title_caution: {
      color: `#e5534b`,
    },

    blockquote_p_note: {
    },

    blockquote_p_tip: {
    },

    blockquote_p_important: {
    },

    blockquote_p_warning: {
    },

    blockquote_p_caution: {
    },

    // 代码块
    code_pre: {
      'font-size': `14px`,
      'overflow-x': `auto`,
      'border-radius': `8px`,
      'padding': `1em`,
      'line-height': `1.5`,
      'margin': `10px 8px`,
    },

    // 行内代码
    code: {
      'margin': 0,
      'white-space': `nowrap`,
      'font-family': `Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    // 图片
    image: {
      'display': `block`,
      'width': `100% !important`,
      'margin': `0.1em auto 0.5em`,
      'border-radius': `4px`,
    },

    // 有序列表
    ol: {
      'padding-left': `1em`,
      'margin-left': `0`,
      'color': `hsl(var(--foreground))`,
    },

    // 无序列表
    ul: {
      'list-style': `circle`,
      'padding-left': `1em`,
      'margin-left': `0`,
      'color': `hsl(var(--foreground))`,
    },

    footnotes: {
      'margin': `0.5em 8px`,
      'font-size': `80%`,
      'color': `hsl(var(--foreground))`,
    },

    figure: {
      margin: `1.5em 8px`,
      color: `hsl(var(--foreground))`,
    },

    hr: {
      'border-style': `solid`,
      'border-width': `2px 0 0`,
      'border-color': `rgba(0,0,0,0.1)`,
      '-webkit-transform-origin': `0 0`,
      '-webkit-transform': `scale(1, 0.5)`,
      'transform-origin': `0 0`,
      'transform': `scale(1, 0.5)`,
      'height': `0.4em`,
      'margin': `1.5em 0`,
    },
  },
  inline: {
    listitem: {
      'text-indent': `-1em`,
      'display': `block`,
      'margin': `0.2em 8px`,
      'color': `hsl(var(--foreground))`,
    },

    codespan: {
      'font-size': `90%`,
      'color': `#d14`,
      'background': `rgba(27,31,35,.05)`,
      'padding': `3px 5px`,
      'border-radius': `4px`,
      // 'word-break': `break-all`,
    },

    em: {
      'font-style': `italic`,
      'font-size': `inherit`,
    },

    link: {
      color: `#576b95`,
    },

    wx_link: {
      'color': `#576b95`,
      'text-decoration': `none`,
    },

    // 字体加粗样式
    strong: {
      'color': `var(--md-primary-color)`,
      'font-weight': `bold`,
      'font-size': `inherit`,
    },

    table: {
      'border-collapse': `collapse`,
      'text-align': `center`,
      'margin': `1em 8px`,
      'color': `hsl(var(--foreground))`,
    },

    thead: {
      'background': `rgba(0, 0, 0, 0.05)`,
      'font-weight': `bold`,
      'color': `hsl(var(--foreground))`,
    },

    td: {
      'border': `1px solid #dfdfdf`,
      'padding': `0.25em 0.5em`,
      'color': `#3f3f3f`,
      'word-break': `keep-all`,
    },

    footnote: {
      'font-size': `12px`,
      'color': `hsl(var(--foreground))`,
    },

    figcaption: {
      'text-align': `center`,
      'color': `#888`,
      'font-size': `0.8em`,
    },
  },
}

// 优雅主题
const graceTheme = toMerged(defaultTheme, {
  base: {
  },
  block: {
    'container': {},
    'h1': {
      'padding': `0.5em 1em`,
      'border-bottom': `2px solid var(--md-primary-color)`,
      'font-size': `1.4em`,
      'text-shadow': `2px 2px 4px rgba(0,0,0,0.1)`,
    },

    'h2': {
      'padding': `0.3em 1em`,
      'border-radius': `8px`,
      'font-size': `1.3em`,
      'box-shadow': `0 4px 6px rgba(0,0,0,0.1)`,
    },

    'h3': {
      'padding-left': `12px`,
      'font-size': `1.2em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-bottom': `1px dashed var(--md-primary-color)`,
    },

    'h4': {
      'font-size': `1.1em`,
    },

    'h5': {
      'font-size': `1em`,
    },

    'h6': {
      'font-size': `1em`,
    },

    'p': {
    },

    'blockquote': {
      'font-style': `italic`,
      'padding': `1em 1em 1em 2em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-radius': `6px`,
      'color': `rgba(0,0,0,0.6)`,
      'box-shadow': `0 4px 6px rgba(0,0,0,0.05)`,
      'margin-bottom': `1em`,
    },

    'blockquote_p': {
    },

    'markdown-alert': {
      'font-style': `italic`,
    },

    'code_pre': {
      'box-shadow': `inset 0 0 10px rgba(0,0,0,0.05)`,
    },

    'code': {
      'white-space': `pre-wrap`,
      'font-family': `'Fira Code', Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    'image': {
      'border-radius': `8px`,
      'box-shadow': `0 4px 8px rgba(0,0,0,0.1)`,
    },

    'ol': {
      'padding-left': `1.5em`,
    },

    'ul': {
      'list-style': `none`,
      'padding-left': `1.5em`,
    },

    'footnotes': {

    },

    'figure': {

    },

    'hr': {
      height: `1px`,
      border: `none`,
      margin: `2em 0`,
      background: `linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0))`,
    },
  },
  inline: {
    listitem: {
      margin: `0.5em 8px`,
    },

    codespan: {
    },

    em: {
    },

    link: {
    },

    wx_link: {
    },

    strong: {
    },

    table: {
      'border-collapse': `separate`,
      'border-spacing': `0`,
      'border-radius': `8px`,
      'margin': `1em 8px`,
      'color': `hsl(var(--foreground))`,
      'box-shadow': `0 4px 6px rgba(0,0,0,0.1)`,
      'overflow': `hidden`,
    },

    thead: {
      color: `#fff`,
    },

    td: {
      padding: `0.5em 1em`,
    },

    footnote: {
      color: `rgba(0,0,0,0.5)`,
    },

    figcaption: {

    },
  },
})

// 简洁主题
const simpleTheme = toMerged(defaultTheme, {
  base: {
  },
  block: {
    container: {},
    h1: {
      'padding': `0.5em 1em`,
      'font-size': `1.4em`,
      'text-shadow': `1px 1px 3px rgba(0,0,0,0.05)`,
    },

    h2: {
      'padding': `0.3em 1.2em`,
      'font-size': `1.3em`,
      'border-radius': `8px 24px 8px 24px`,
      'box-shadow': `0 2px 6px rgba(0,0,0,0.06)`,
    },

    h3: {
      'padding-left': `12px`,
      'font-size': `1.2em`,
      'border-radius': `6px`,
      'line-height': `2.4em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-right': `1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'border-bottom': `1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'border-top': `1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'background': `color-mix(in srgb, var(--md-primary-color) 8%, transparent)`,
    },

    h4: {
      'font-size': `1.1em`,
      'border-radius': `6px`,
    },

    h5: {
      'border-radius': `6px`,
    },

    h6: {
      'border-radius': `6px`,
    },

    blockquote: {
      'font-style': `italic`,
      'padding': `1em 1em 1em 2em`,
      'color': `rgba(0,0,0,0.6)`,
      'border-bottom': `0.2px solid rgba(0, 0, 0, 0.04)`,
      'border-top': `0.2px solid rgba(0, 0, 0, 0.04)`,
      'border-right': `0.2px solid rgba(0, 0, 0, 0.04)`,
    },

    blockquote_note: {
      'font-style': `italic`,
    },

    blockquote_tip: {
      'font-style': `italic`,
    },

    blockquote_important: {
      'font-style': `italic`,
    },

    blockquote_warning: {
      'font-style': `italic`,
    },

    blockquote_caution: {
      'font-style': `italic`,
    },

    blockquote_title: {
    },

    blockquote_title_note: {

    },

    blockquote_title_tip: {
    },

    blockquote_title_important: {
    },

    blockquote_title_warning: {
    },

    blockquote_title_caution: {
    },

    blockquote_p_note: {
    },

    blockquote_p_tip: {
    },

    blockquote_p_important: {
    },

    blockquote_p_warning: {
    },

    blockquote_p_caution: {
    },

    code_pre: {
      border: `1px solid rgba(0, 0, 0, 0.04)`,
    },

    code: {
      'white-space': `pre-wrap`,
      'font-family': `'Fira Code', Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    image: {
      'border-radius': `8px`,
      'border': `1px solid rgba(0, 0, 0, 0.04)`,
    },

    ol: {
      'padding-left': `1.5em`,
    },

    ul: {
      'list-style': `none`,
      'padding-left': `1.5em`,
    },

    hr: {
      height: `1px`,
      border: `none`,
      margin: `2em 0`,
      background: `linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0))`,
    },
  },
  inline: {
    listitem: {
      margin: `0.5em 8px`,
    },
  },
})

// 添加7个新主题
// ===== 主题定义开始 =====
// 创建新主题的步骤：
// 1. 使用toMerged函数基于defaultTheme创建新主题
// 2. 设置主题的基本样式（base部分）
// 3. 设置块级元素样式（block部分）
// 4. 设置内联元素样式（inline部分）
// 5. 在themeMap中注册新主题
// 6. 在themeColorMap中添加主题色
// 7. 在themeOptions中添加主题选项

// 暗黑主题示例
const phycatDark = toMerged(defaultTheme, {
  base: {
    // 主题的主色调，用于标题、边框等元素
    '--md-primary-color': `#546f99`,
    // 文本对齐方式
    'text-align': `left`,
    // 行高
    'line-height': `1.75`,
    // 背景色（暗色主题特有）
    'background-color': `#222222`,
    // 文本颜色（暗色主题特有）
    'color': `#c5c5c5`,
  },
  block: {
    // 一级标题样式
    h1: {
      'display': `table`,
      'padding': `0 1em`,
      'border-bottom': `2px solid var(--md-primary-color)`,
      'margin': `2em auto 1em`,
      'color': `#5c7aaa`, // 标题颜色
      'font-size': `1.6em`,
      'font-weight': `bold`,
      'text-align': `center`,
    },
    // 二级标题样式
    h2: {
      display: `table`,
      padding: `0.2em 1em`,
      margin: `4em auto 2em`,
      color: `#fff`,
      background: `#6785b4`, // 背景色，可以是纯色或渐变
    },
    // 三级标题样式
    h3: {
      'padding-left': `8px`,
      'border-left': `3px solid var(--md-primary-color)`,
      'margin': `2em 8px 0.75em 0`,
      'color': `#ffffff`,
      'font-size': `1.1em`,
      'font-weight': `bold`,
      'line-height': `1.2`,
    },
    // 四级标题样式
    h4: {
      'margin': `2em 8px 0.5em`,
      'color': `var(--md-primary-color)`,
      'font-size': `1em`,
      'font-weight': `bold`,
    },
    // 段落样式
    p: {
      'margin': `1.5em 8px`,
      'letter-spacing': `0.1em`,
      'color': `#ffffff`,
    },
    // 引用样式
    blockquote: {
      'font-style': `normal`,
      'padding': `1em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-radius': `6px`,
      'color': `rgba(197, 197, 197, 0.8)`,
      'background': `#25272E`,
    },
    // 代码块样式
    code_pre: {
      'font-size': `14px`,
      'overflow-x': `auto`,
      'border-radius': `8px`,
      'padding': `1em`,
      'line-height': `1.5`,
      'margin': `10px 8px`,
      'background': `#25272E`,
    },
    // 行内代码样式
    code: {
      'white-space': `pre-wrap`,
      'font-family': `Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },
    // 图片样式
    image: {
      'border-radius': `8px`,
      'border': `1px solid rgba(0, 0, 0, 0.04)`,
    },
    // 有序列表
    ol: {
      'padding-left': `1em`,
      'margin-left': `0`,
      'color': `#ffffff`,
    },

    // 无序列表
    ul: {
      'list-style': `circle`,
      'padding-left': `1em`,
      'margin-left': `0`,
      'color': `#ffffff`,
    },
  },

  inline: {
    // 代码段样式
    codespan: {
      'font-size': `90%`,
      'color': `#e6dada`,
      'background': `#708ab3`,
      'padding': `3px 5px`,
      'border-radius': `4px`,
    },
    // 加粗样式
    strong: {
      'color': `var(--md-primary-color)`,
      'font-weight': `bold`,
    },
  },
})

// 绿色主题示例
const phycatGreen = toMerged(defaultTheme, {
  base: {
    // 主题的主色调
    '--md-primary-color': `#11aa63`,
  },
  block: {
    // 只需要覆盖想要修改的样式，其他样式会继承自defaultTheme
    h1: {
      color: `#11aa63`,
    },
    h2: {
      'color': `#000`,
      'background': `linear-gradient(to right, #00F260, #0575E6)`, // 渐变背景
      'border-radius': `8px 8px 8px 8px`,
      'box-shadow': `0 2px 6px rgba(0,0,0,0.06)`,

    },
    h3: {
      'border-left': `3px solid #11aa63`,
    },
    h4: {
      color: `#11aa63`,
    },
    blockquote: {
      'border-left': `4px solid #11aa63`,
      'background': `#6cb19125`,
    },
  },
  inline: {
    codespan: {
      color: `#009a52`,
      background: `#6cb19125`,
    },
    strong: {
      color: `#11aa63`,
    },
  },
})

// 薄荷主题示例
const phycatMint = toMerged(defaultTheme, {
  base: {
    '--md-primary-color': `#1FA2FF`,
  },
  block: {
    h1: {
      color: `#1FA2FF`,
    },
    h2: {
      'color': `#000`,
      'background': `linear-gradient(to right,#1FA2FF, #12D8FA)`,
      'border-radius': `8px 8px 8px 8px`,
      'box-shadow': `0 2px 6px rgba(0,0,0,0.06)`,
    },
    h3: {
      'border-left': `3px solid #1FA2FF`,
    },
    h4: {
      color: `#1FA2FF`,
    },
    blockquote: {
      'border-left': `4px solid #1FA2FF`,
      'background': `#e1f5f3`,
    },
  },
  inline: {
    codespan: {
      color: `#1FA2FF`,
      background: `#e1f5f3`,
    },
    strong: {
      color: `#1FA2FF`,
    },
  },
})

// 橙色主题示例
const phycatOrange = toMerged(defaultTheme, {
  base: {
    '--md-primary-color': `#ff8c42`,
  },
  block: {
    h1: {
      color: `#ff8c42`,
    },
    h2: {
      'color': `#000`,
      'background': `linear-gradient(to right, #fc4a1a, #f7b733)`,
      'border-radius': `8px 8px 8px 8px`,
      'box-shadow': `0 2px 6px rgba(0,0,0,0.06)`,
    },
    h3: {
      'border-left': `3px solid #ff8c42`,
    },
    h4: {
      color: `#ff8c42`,
    },
    blockquote: {
      'border-left': `4px solid #ff8c42`,
      'background': `#fff2e9`,
    },
  },
  inline: {
    codespan: {
      color: `#e67e3b`,
      background: `#fff2e9`,
    },
    strong: {
      color: `#ff8c42`,
    },
  },
})

// 蓝色主题示例
const phycatPlusblue = toMerged(defaultTheme, {
  base: {
    '--md-primary-color': `#4285f4`,
  },
  block: {
    h1: {
      color: `#4285f4`,
    },
    h2: {
      color: `#000`,
      background: `linear-gradient(to right, #4285f4, #b3cbf3)`,
    },
    h3: {
      'border-left': `3px solid #4285f4`,
    },
    h4: {
      color: `#4285f4`,
    },
    blockquote: {
      'border-left': `4px solid #4285f4`,
      'background': `#e8f0fe`,
    },
  },
  inline: {
    codespan: {
      color: `#3b78e7`,
      background: `#e8f0fe`,
    },
    strong: {
      color: `#4285f4`,
    },
  },
})

// 紫色主题示例
const phycatPurple = toMerged(defaultTheme, {
  base: {
    '--md-primary-color': `#8e44ad`,
  },
  block: {
    h1: {
      color: `#8e44ad`,
    },
    h2: {
      'color': `#EEEEEE`,
      'background': `linear-gradient(to right, #ad5389, #3c1053)`,
      'border-radius': `8px 8px 8px 8px`,
      'box-shadow': `0 2px 6px rgba(0,0,0,0.06)`,
    },
    h3: {
      'border-left': `3px solid #8e44ad`,
    },
    h4: {
      color: `#8e44ad`,
    },
    blockquote: {
      'border-left': `4px solid #8e44ad`,
      'background': `#f4e9f9`,
    },
  },
  inline: {
    codespan: {
      color: `#7d3c99`,
      background: `#f4e9f9`,
    },
    strong: {
      color: `#8e44ad`,
    },
  },
})

// 红色主题示例
const phycatRed = toMerged(defaultTheme, {
  base: {
    '--md-primary-color': `#e74c3c`,
  },
  block: {
    h1: {
      color: `#e74c3c`,
    },
    h2: {
      'color': `#ffffff`,
      'background': `linear-gradient(to right, #FF416C, #FF4B2B)`,
      'border-radius': `8px 8px 8px 8px`,
      'box-shadow': `0 2px 6px rgba(0,0,0,0.06)`,
    },
    h3: {
      'border-left': `3px solid #e74c3c`,
    },
    h4: {
      color: `#e74c3c`,
    },
    blockquote: {
      'border-left': `4px solid #e74c3c`,
      'background': `#fdedeb`,
    },
  },
  inline: {
    codespan: {
      color: `#d04437`,
      background: `#fdedeb`,
    },
    strong: {
      color: `#e74c3c`,
    },
  },
})

// 主题与主题色的映射关系
// 添加新主题时，在这里添加对应的主题色
export const themeColorMap = {
  default: `#0F4C81`, // 经典蓝
  grace: `#92617E`, // 薰衣紫
  simple: `#333333`, // 石墨黑
  phycatDark: `#546f99`, // 暗蓝色
  phycatGreen: `#11aa63`, // 绿色
  phycatMint: `#1FA2FF`, // 薄荷色
  phycatOrange: `#ff8c42`, // 橙色
  phycatPlusblue: `#4285f4`, // 蓝色
  phycatPurple: `#8e44ad`, // 紫色
  phycatRed: `#e74c3c`, // 红色
  // 在这里添加新主题的主题色
  // 格式: 主题名: `颜色代码`, // 颜色描述
}

// 主题选项
export const themeOptions: IConfigOption<keyof typeof themeMap>[] = [
  {
    label: `蓝色经典`, // 显示在菜单中的名称
    value: `default`, // 对应themeMap中的键名
    desc: ``, // 描述信息
  },
  {
    label: `深沉优雅`,
    value: `grace`,
    desc: `@brzhang`,
  },
  {
    label: `黑白极简`,
    value: `simple`,
    desc: `@okooo5km`,
  },
  {
    label: `暗黑江湖`,
    value: `phycatDark`,
    desc: `@phycat`,
  },
  {
    label: `绿色炫丽`,
    value: `phycatGreen`,
    desc: `@phycat`,
  },
  {
    label: `薄荷口味`,
    value: `phycatMint`,
    desc: `@phycat`,
  },
  {
    label: `艳阳高照`,
    value: `phycatOrange`,
    desc: `@phycat`,
  },
  {
    label: `蓝色清新`,
    value: `phycatPlusblue`,
    desc: `@phycat`,
  },
  {
    label: `紫色浪漫`,
    value: `phycatPurple`,
    desc: `@phycat`,
  },
  {
    label: `红色热情`,
    value: `phycatRed`,
    desc: `@phycat`,
  },
  // 添加新主题时，在这里添加新的选项
  // {
  //   label: `新主题名称`,
  //   value: `newThemeName`, // 必须与themeMap中的键名一致
  //   desc: `描述信息`,
  // },
]

// 主题映射
export const themeMap = {
  default: defaultTheme,
  grace: graceTheme,
  simple: simpleTheme,
  phycatDark,
  phycatGreen,
  phycatMint,
  phycatOrange,
  phycatPlusblue,
  phycatPurple,
  phycatRed,
}
