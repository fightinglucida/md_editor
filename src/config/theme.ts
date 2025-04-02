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

const minimalTheme: Theme = {
  base: {
    '--md-primary-color': `#333333`,
    '--blockquote-background': `#f8f8f8`,
    'text-align': `left`,
    'line-height': `1.75`,
    'background': `#ffffff`,
    'font-family': `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
  },
  block: {
    container: {
      'box-shadow': `0 2px 10px rgba(0,0,0,0.05)`,
      'padding': `2rem`,
      'max-width': `800px`,
      'margin': `0 auto`,
    },

    // 标题
    h1: {
      'font-size': `2em`,
      'font-weight': `700`,
      'margin': `2rem 0 1.5rem`,
      'color': `#111`,
      'border-bottom': `2px solid #eee`,
      'padding-bottom': `0.5rem`,
    },
    h2: {
      'font-size': `1.6em`,
      'font-weight': `600`,
      'margin': `1.8rem 0 1.2rem`,
      'color': `#333`,
      'border-left': `4px solid #eee`,
      'padding-left': `1rem`,
    },
    h3: {
      'font-size': `1.3em`,
      'font-weight': `500`,
      'margin': `1.6rem 0 1rem`,
      'color': `#555`,
    },
    h4: {
      'font-size': `1.1em`,
      'font-weight': `500`,
      'margin': `1.4rem 0 0.8rem`,
      'color': `#777`,
    },
    h5: {
      'font-size': `1em`,
      'font-weight': `500`,
      'margin': `1.2rem 0 0.6rem`,
      'color': `#999`,
    },
    h6: {
      'font-size': `0.9em`,
      'font-weight': `500`,
      'margin': `1rem 0 0.4rem`,
      'color': `#aaa`,
    },

    // 段落
    p: {
      'margin': `1em 0`,
      'color': `#444`,
      'font-size': `1rem`,
      'letter-spacing': `0.01em`,
    },

    // 引用
    blockquote: {
      'border-left': `4px solid #e0e0e0`,
      'padding': `1em 1.5em`,
      'margin': `1.5em 0`,
      'background': `var(--blockquote-background)`,
      'color': `#555`,
      'font-style': `normal`,
      'border-radius': `0 4px 4px 0`,
    },

    blockquote_p: {
      margin: `0.5em 0`,
      color: `inherit`,
    },

    // 警告块
    blockquote_note: {
      'border-left-color': `#4285f4`,
      'background': `#f0f7ff`,
    },
    blockquote_tip: {
      'border-left-color': `#34a853`,
      'background': `#f0fff4`,
    },
    blockquote_warning: {
      'border-left-color': `#fbbc05`,
      'background': `#fff9e6`,
    },
    blockquote_caution: {
      'border-left-color': `#ea4335`,
      'background': `#fff0f0`,
    },

    blockquote_title: {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
      'font-weight': `600`,
      'margin-bottom': `0.5em`,
    },

    // 代码块
    code_pre: {
      'background': `#f5f5f5`,
      'border-radius': `6px`,
      'padding': `1.2em`,
      'overflow-x': `auto`,
      'font-family': `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace`,
      'font-size': `0.9em`,
      'line-height': `1.6`,
      'margin': `1.5em 0`,
      'border': `1px solid #eaeaea`,
    },

    // 行内代码
    code: {
      'background': `#f5f5f5`,
      'padding': `0.2em 0.4em`,
      'border-radius': `3px`,
      'font-family': `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace`,
      'font-size': `0.9em`,
      'color': `#d14`,
    },

    // 图片
    image: {
      'display': `block`,
      'max-width': `100%`,
      'height': `auto`,
      'margin': `1.5em auto`,
      'border-radius': `4px`,
      'box-shadow': `0 2px 8px rgba(0,0,0,0.1)`,
    },

    // 列表
    ol: {
      'padding-left': `1.5em`,
      'margin': `1.5em 0`,
      'color': `#444`,
    },
    ul: {
      'padding-left': `1.5em`,
      'margin': `1.5em 0`,
      'color': `#444`,
      'list-style-type': `square`,
    },

    // 表格
    // table: {
    //   'border-collapse': `collapse`,
    //   'width': `100%`,
    //   'margin': `1.5em 0`,
    //   'font-size': `0.95em`,
    //   'box-shadow': `0 0 0 1px #e0e0e0`,
    //   'border-radius': `4px`,
    //   'overflow': `hidden`,
    // },
    // thead: {
    //   'background': `#f5f5f5`,
    //   'font-weight': `600`,
    // },
    // td: {
    //   'padding': `0.75em 1em`,
    //   'border': `1px solid #e0e0e0`,
    //   'line-height': `1.5`,
    // },

    // 分隔线
    hr: {
      border: `none`,
      height: `1px`,
      background: `#e0e0e0`,
      margin: `2.5em 0`,
    },

    // 脚注
    footnotes: {
      'border-top': `1px solid #e0e0e0`,
      'margin-top': `3em`,
      'padding-top': `1em`,
      'font-size': `0.85em`,
      'color': `#666`,
    },
    figure: {
      margin: `1.5em 8px`,
      color: `hsl(var(--foreground))`,
    },
    blockquote_important: {},
    blockquote_title_note: {},
    blockquote_title_tip: {},
    blockquote_title_important: {},
    blockquote_title_warning: {},
    blockquote_title_caution: {},
    blockquote_p_note: {},
    blockquote_p_tip: {},
    blockquote_p_important: {},
    blockquote_p_warning: {},
    blockquote_p_caution: {},
  },
  inline: {
    wx_link: defaultTheme.inline.wx_link,
    table: {
      'border-collapse': `collapse`,
      'width': `100%`,
      'margin': `1.5em 0`,
      'font-size': `0.95em`,
      'box-shadow': `0 0 0 1px #e0e0e0`,
      'border-radius': `4px`,
      'overflow': `hidden`,
    },
    thead: {
      'background': `#f5f5f5`,
      'font-weight': `600`,
    },
    td: {
      'padding': `0.75em 1em`,
      'border': `1px solid #e0e0e0`,
      'line-height': `1.5`,
    },
    listitem: {
      'margin': `0.5em 0`,
      'line-height': `1.6`,
    },

    codespan: {
      'background': `#f5f5f5`,
      'padding': `0.2em 0.4em`,
      'border-radius': `3px`,
      'font-family': `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace`,
      'font-size': `0.9em`,
      'color': `#d14`,
    },

    em: {
      'font-style': `italic`,
      'color': `#555`,
    },

    link: {
      'color': `#0366d6`,
      'text-decoration': `none`,
      'border-bottom': `1px solid rgba(3,102,214,0.2)`,
    },

    strong: {
      'font-weight': `600`,
      'color': `#222`,
    },

    footnote: {
      'font-size': `12px`,
      'color': `#666`,
    },

    figcaption: {
      'text-align': `center`,
      'font-size': `0.8em`,
    },
  },
}

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

// 科技主题
const techTheme: Theme = {
  base: {
    '--md-primary-color': `#2196F3`,
    '--blockquote-background': `rgba(11, 31, 53, 0.5)`,
    'text-align': `left`,
    'line-height': `1.6`,
    'background': `#0A192F`,
    'color': `#E6F1FF`,
    'font-family': `'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif`,
  },
  block: {
    container: {
      'background': `linear-gradient(145deg, #0A192F 0%, #172A45 100%)`,
      'padding': `2.5rem`,
      'max-width': `900px`,
      'margin': `2rem auto`,
      'border-radius': `8px`,
    },

    // 标题（带科技感渐变背景）
    h1: {
      'font-size': `2.2em`,
      'font-weight': `600`,
      'margin': `3rem 0 2rem`,
      'background': `linear-gradient(90deg, rgba(33,150,243,0.2) 0%, rgba(33,150,243,0) 100%)`,
      'padding': `1rem 1.5rem`,
      'border-left': `4px solid #2196F3`,
      'color': `#E6F1FF`,
      'letter-spacing': `-0.02em`,
    },
    h2: {
      'font-size': `1.8em`,
      'font-weight': `600`,
      'margin': `2.5rem 0 1.8rem`,
      'background': `linear-gradient(90deg, rgba(33,150,243,0.15) 0%, rgba(33,150,243,0) 100%)`,
      'padding': `0.8rem 1.5rem`,
      'border-left': `3px solid #2196F3`,
      'color': `#CCD6F6`,
    },
    h3: {
      'font-size': `1.5em`,
      'font-weight': `500`,
      'margin': `2.2rem 0 1.5rem`,
      'background': `linear-gradient(90deg, rgba(33,150,243,0.1) 0%, rgba(33,150,243,0) 100%)`,
      'padding': `0.6rem 1.5rem`,
      'border-left': `2px solid #2196F3`,
      'color': `#A8B2D1`,
    },
    h4: {
      'font-size': `1.3em`,
      'font-weight': `500`,
      'margin': `2rem 0 1.3rem`,
      'color': `#8892B0`,
      'text-shadow': `0 0 8px rgba(33,150,243,0.3)`,
    },
    h5: {
      'font-size': `1.1em`,
      'font-weight': `500`,
      'margin': `1.8rem 0 1.1rem`,
      'color': `#607BBA`,
      'border-bottom': `1px dashed rgba(33,150,243,0.3)`,
      'padding-bottom': `0.3rem`,
    },
    h6: {
      'font-size': `1em`,
      'font-weight': `500`,
      'margin': `1.6rem 0 1rem`,
      'color': `#495C8A`,
    },

    // 段落
    p: {
      'margin': `1.2em 0`,
      'color': `#E6F1FF`,
      'font-size': `1.05rem`,
      'letter-spacing': `0.01em`,
    },

    // 引用块（科技感半透明背景）
    blockquote: {
      'border-left': `3px solid rgba(33,150,243,0.5)`,
      'padding': `1.5rem`,
      'margin': `2rem 0`,
      'background': `var(--blockquote-background)`,
      'color': `#CCD6F6`,
      'font-style': `normal`,
      'border-radius': `0 6px 6px 0`,
      'backdrop-filter': `blur(4px)`,
    },

    blockquote_p: {
      margin: `0.8em 0`,
      color: `inherit`,
    },

    // 警告块（科技蓝调）
    blockquote_note: {
      'border-left-color': `#478BE6`,
      'background': `rgba(71, 139, 230, 0.1)`,
    },
    blockquote_tip: {
      'border-left-color': `#57AB5A`,
      'background': `rgba(87, 171, 90, 0.1)`,
    },
    blockquote_warning: {
      'border-left-color': `#F4B740`,
      'background': `rgba(244, 183, 64, 0.1)`,
    },
    blockquote_caution: {
      'border-left-color': `#E5534B`,
      'background': `rgba(229, 83, 75, 0.1)`,
    },

    blockquote_title: {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
      'font-weight': `600`,
      'margin-bottom': `0.8em`,
      'text-transform': `uppercase`,
      'letter-spacing': `0.05em`,
      'font-size': `0.9em`,
    },

    // 代码块（深色终端风格）
    code_pre: {
      'background': `#0F1C2E`,
      'border-radius': `6px`,
      'padding': `1.5rem`,
      'overflow-x': `auto`,
      'font-family': `'SF Mono', 'Roboto Mono', monospace`,
      'font-size': `0.95em`,
      'line-height': `1.5`,
      'margin': `2rem 0`,
      'border': `1px solid rgba(33,150,243,0.3)`,
      'box-shadow': `0 4px 12px rgba(0,0,0,0.2)`,
      'color': `#E6F1FF`,
    },

    // 行内代码
    code: {
      'background': `rgba(33,150,243,0.1)`,
      'padding': `0.3em 0.5em`,
      'border-radius': `3px`,
      'font-family': `'SF Mono', 'Roboto Mono', monospace`,
      'font-size': `0.9em`,
      'color': `#64B5F6`,
      'border': `1px solid rgba(33,150,243,0.3)`,
    },

    // 图片（带科技感边框）
    image: {
      'display': `block`,
      'max-width': `100%`,
      'height': `auto`,
      'margin': `2rem auto`,
      'border-radius': `4px`,
      'border': `1px solid rgba(33,150,243,0.3)`,
      'box-shadow': `0 0 20px rgba(33,150,243,0.1)`,
    },

    // 列表（简洁科技风）
    ol: {
      'padding-left': `2em`,
      'margin': `1.8em 0`,
      'color': `#E6F1FF`,
      'list-style-type': `decimal-leading-zero`,
    },
    ul: {
      'padding-left': `2em`,
      'margin': `1.8em 0`,
      'color': `#E6F1FF`,
      'list-style-type': `none`,
    },

    // 分隔线（科技感发光效果）
    hr: {
      'border': `none`,
      'height': `1px`,
      'background': `linear-gradient(to right, transparent, rgba(33,150,243,0.5), transparent)`,
      'margin': `3rem 0`,
      'box-shadow': `0 0 8px rgba(33,150,243,0.3)`,
    },

    // 脚注
    footnotes: {
      'border-top': `1px solid rgba(33,150,243,0.3)`,
      'margin-top': `3.5rem`,
      'padding-top': `1.5rem`,
      'font-size': `0.85em`,
      'color': `#8892B0`,
    },
    figure: {
      margin: `1.5em 8px`,
      color: `hsl(var(--foreground))`,
    },
    blockquote_important: {},
    blockquote_title_note: {},
    blockquote_title_tip: {},
    blockquote_title_important: {},
    blockquote_title_warning: {},
    blockquote_title_caution: {},
    blockquote_p_note: {},
    blockquote_p_tip: {},
    blockquote_p_important: {},
    blockquote_p_warning: {},
    blockquote_p_caution: {},
  },
  inline: {
    wx_link: defaultTheme.inline.wx_link,
    table: {
      'border-collapse': `collapse`,
      'width': `100%`,
      'margin': `2rem 0`,
      'font-size': `0.95em`,
      'border': `1px solid rgba(33,150,243,0.3)`,
      'border-radius': `6px`,
      'overflow': `hidden`,
    },
    thead: {
      'background': `rgba(33,150,243,0.2)`,
      'font-weight': `600`,
    },
    td: {
      padding: `1rem`,
      border: `1px solid rgba(33,150,243,0.2)`,
      color: `#E6F1FF`,
    },
    listitem: {
      'margin': `0.6em 0`,
      'line-height': `1.7`,
    },

    codespan: {
      'background': `rgba(33,150,243,0.1)`,
      'padding': `0.3em 0.5em`,
      'border-radius': `3px`,
      'font-family': `'SF Mono', 'Roboto Mono', monospace`,
      'font-size': `0.9em`,
      'color': `#64B5F6`,
      'border': `1px solid rgba(33,150,243,0.3)`,
    },

    em: {
      'font-style': `italic`,
      'color': `#A8B2D1`,
    },

    link: {
      'color': `#64B5F6`,
      'text-decoration': `none`,
      'border-bottom': `1px dashed rgba(100,181,246,0.5)`,
      'transition': `all 0.2s ease`,
    },

    strong: {
      'font-weight': `600`,
      'color': `#E6F1FF`,
      'text-shadow': `0 0 5px rgba(33,150,243,0.3)`,
    },

    footnote: {
      'font-size': `0.85em`,
      'color': `#8892B0`,
    },

    figcaption: {
      'text-align': `center`,
      'font-size': `0.9em`,
      'color': `#8892B0`,
      'margin-top': `0.8rem`,
    },
  },
}

const letterTheme: Theme = {
  base: {
    '--md-primary-color': `#8B6B61`, // 主色调为复古棕色
    '--blockquote-background': `#FFF9F0`,
    'text-align': `left`,
    'line-height': `1.8`,
    'background': `#FFF9F0`, // 信纸底色
    'font-family': `"Georgia", "Times New Roman", serif`,
    'color': `#5D4037`, // 主要文字颜色
  },
  block: {
    container: {
      'background-image': `linear-gradient(to bottom, #FFF9F0 95%, #F0E6D2 100%)`,
      'padding': `3rem 2.5rem`,
      'border': `1px solid #E0D6C3`,
      'max-width': `700px`,
      'margin': `2rem auto`,
      'box-shadow': `0 0 15px rgba(0,0,0,0.05)`,
    },

    // 标题（已优化视觉层次）
    h1: {
      'font-size': `1.8em`,
      'font-weight': `normal`,
      'margin': `2.5rem 0 1.8rem`,
      'color': `#5D4037`,
      'border-bottom': `1px dashed #D7CCC8`,
      'font-style': `italic`,
      'text-align': `center`,
      'letter-spacing': `0.05em`,
    },
    h2: {
      'font-size': `1.5em`,
      'font-weight': `normal`,
      'margin': `2.2rem 0 1.5rem`,
      'color': `#6D4C41`,
      'text-decoration': `underline`,
      'text-decoration-color': `#D7CCC8`,
      'text-decoration-thickness': `1px`,
      'text-underline-offset': `0.3em`,
    },
    h3: {
      'font-size': `1.3em`,
      'font-weight': `normal`,
      'margin': `2rem 0 1.3rem`,
      'color': `#8D6E63`,
      'letter-spacing': `0.05em`,
      'border-left': `3px solid #D7CCC8`,
      'padding-left': `0.8em`,
    },
    h4: {
      'font-size': `1.1em`,
      'font-weight': `normal`,
      'margin': `1.8rem 0 1.1rem`,
      'color': `#A1887F`,
      'font-variant': `small-caps`,
    },
    h5: {
      'font-size': `1em`,
      'font-style': `italic`,
      'margin': `1.6rem 0 1rem`,
      'color': `#BCAAA4`,
    },
    h6: {
      'font-size': `0.9em`,
      'font-style': `italic`,
      'margin': `1.4rem 0 0.9rem`,
      'color': `#D7CCC8`,
      'text-decoration': `underline dotted`,
    },

    // 段落
    p: {
      'margin': `1.2em 0`,
      'color': `#5D4037`,
      'font-size': `1.05rem`,
      'text-align': `justify`,
      'text-justify': `inter-character`,
      'hyphens': `auto`,
    },

    // 引用块
    blockquote: {
      'border-left': `3px solid #D7CCC8`,
      'padding': `1.2em 1.8em`,
      'margin': `1.8em 0`,
      'background': `var(--blockquote-background)`,
      'color': `#6D4C41`,
      'font-style': `normal`,
      'position': `relative`,
    },

    blockquote_p: {
      'margin': `0.8em 0`,
      'color': `inherit`,
      'text-indent': `1em`,
    },

    // 警告块（调整为复古风格）
    blockquote_note: {
      'border-left-color': `#7C9EB2`,
      'background': `#F0F7F9`,
    },
    blockquote_tip: {
      'border-left-color': `#8BA88E`,
      'background': `#F2F7F0`,
    },
    blockquote_warning: {
      'border-left-color': `#D4A373`,
      'background': `#FBF3EC`,
    },
    blockquote_caution: {
      'border-left-color': `#C88D8D`,
      'background': `#FBEFEF`,
    },

    blockquote_title: {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
      'font-weight': `600`,
      'margin-bottom': `0.8em`,
      'font-variant': `small-caps`,
      'letter-spacing': `0.1em`,
    },

    blockquote_important: {},
    blockquote_title_note: {},
    blockquote_title_tip: {},
    blockquote_title_important: {},
    blockquote_title_warning: {},
    blockquote_title_caution: {},
    blockquote_p_note: {},
    blockquote_p_tip: {},
    blockquote_p_important: {},
    blockquote_p_warning: {},
    blockquote_p_caution: {},

    // 代码块（调整为复古打字机风格）
    code_pre: {
      'background': `#F5F0E6`,
      'border-radius': `3px`,
      'padding': `1.2em 1.5em`,
      'overflow-x': `auto`,
      'font-family': `"Courier New", Courier, monospace`,
      'font-size': `0.95em`,
      'line-height': `1.5`,
      'margin': `1.8em 0`,
      'border': `1px solid #E0D6C3`,
      'box-shadow': `inset 0 0 3px rgba(0,0,0,0.1)`,
      'color': `#5D4037`,
    },

    // 行内代码
    code: {
      'background': `#F5F0E6`,
      'padding': `0.2em 0.4em`,
      'border-radius': `2px`,
      'font-family': `"Courier New", Courier, monospace`,
      'font-size': `0.9em`,
      'color': `#8B6B61`,
      'border': `1px solid #E0D6C3`,
    },

    // 图片（添加信纸质感边框）
    image: {
      'display': `block`,
      'max-width': `90%`,
      'height': `auto`,
      'margin': `2em auto`,
      'border': `1px solid #E0D6C3`,
      'padding': `8px`,
      'background': `white`,
      'box-shadow': `0 2px 8px rgba(0,0,0,0.05)`,
      'position': `relative`,
    },

    // 列表（使用复古项目符号）
    ol: {
      'padding-left': `1.8em`,
      'margin': `1.8em 0`,
      'color': `#5D4037`,
      'list-style-type': `decimal`,
    },
    ul: {
      'padding-left': `1.8em`,
      'margin': `1.8em 0`,
      'color': `#5D4037`,
      'list-style-type': `disc`,
    },

    // 分隔线（手绘风格）
    hr: {
      border: `none`,
      height: `1px`,
      background: `linear-gradient(to right, transparent 0%, #D7CCC8 50%, transparent 100%)`,
      margin: `3em 0`,
      position: `relative`,
    },

    // 脚注（信纸底部风格）
    footnotes: {
      'border-top': `1px dashed #D7CCC8`,
      'margin-top': `3.5em`,
      'padding-top': `1.5em`,
      'font-size': `0.85em`,
      'color': `#8D6E63`,
    },

    figure: {
      margin: `1.5em 8px`,
      color: `hsl(var(--foreground))`,
    },
  },
  inline: {
    wx_link: defaultTheme.inline.wx_link,
    table: {
      'border-collapse': `separate`,
      'width': `100%`,
      'margin': `2em 0`,
      'font-size': `0.95em`,
      'border-spacing': `0`,
      'border': `1px solid #E0D6C3`,
      'border-radius': `4px`,
      'overflow': `hidden`,
      'box-shadow': `0 1px 3px rgba(0,0,0,0.05)`,
    },
    thead: {
      'background': `#F5F0E6`,
      'font-weight': `600`,
      'border-bottom': `1px solid #E0D6C3`,
    },
    td: {
      'padding': `0.8em 1.2em`,
      'border-bottom': `1px solid #E0D6C3`,
      'border-right': `1px solid #E0D6C3`,
    },
    listitem: {
      'margin': `0.6em 0`,
      'line-height': `1.7`,
      'text-indent': `-0.5em`,
    },

    codespan: {
      'background': `#F5F0E6`,
      'padding': `0.2em 0.4em`,
      'border-radius': `2px`,
      'font-family': `"Courier New", Courier, monospace`,
      'font-size': `0.9em`,
      'color': `#8B6B61`,
      'border': `1px solid #E0D6C3`,
    },

    em: {
      'font-style': `italic`,
      'color': `#6D4C41`,
    },

    link: {
      'color': `#7C9EB2`,
      'text-decoration': `underline`,
      'text-decoration-color': `#D7CCC8`,
      'text-underline-offset': `0.2em`,
    },

    strong: {
      'font-weight': `600`,
      'color': `#5D4037`,
      'letter-spacing': `0.02em`,
    },

    footnote: {
      'font-size': `0.85em`,
      'color': `#8D6E63`,
      'vertical-align': `super`,
    },

    figcaption: {
      'text-align': `center`,
      'font-size': `0.9em`,
      'color': `#A1887F`,
      'margin-top': `0.8em`,
      'font-style': `italic`,
    },
  },
}

const ecommerceTheme: Theme = {
  base: {
    '--md-primary-color': `#FF6B35`, // 主色调为电商橙
    '--blockquote-background': `#FFF5F0`,
    'text-align': `left`,
    'line-height': `1.7`,
    'background': `#FFFFFF`,
    'font-family': `'Poppins', -apple-system, BlinkMacSystemFont, sans-serif`,
    'color': `#333333`,
  },
  block: {
    container: {
      'padding': `2rem`,
      'max-width': `900px`,
      'margin': `0 auto`,
    },

    // 标题（电商促销风格）
    h1: {
      'font-size': `2.4em`,
      'font-weight': `800`,
      'margin': `2.5rem 0 1.8rem`,
      'color': `#FF6B35`,
      'text-align': `center`,
      'text-transform': `uppercase`,
      'letter-spacing': `0.05em`,
      'position': `relative`,
      'padding-bottom': `1rem`,
    },
    h2: {
      'font-size': `1.8em`,
      'font-weight': `700`,
      'margin': `2.2rem 0 1.5rem`,
      'color': `#FF8C42`,
      'border-bottom': `3px solid #FFE8DC`,
      'padding-bottom': `0.5rem`,
      'display': `inline-block`,
    },
    h3: {
      'font-size': `1.5em`,
      'font-weight': `600`,
      'margin': `2rem 0 1.3rem`,
      'color': `#FF9F4D`,
      'background': `#FFF5EF`,
      'padding': `0.5rem 1rem`,
      'border-radius': `4px`,
    },
    h4: {
      'font-size': `1.3em`,
      'font-weight': `600`,
      'margin': `1.8rem 0 1.1rem`,
      'color': `#FFB162`,
    },
    h5: {
      'font-size': `1.1em`,
      'font-weight': `600`,
      'margin': `1.6rem 0 1rem`,
      'color': `#FFC27D`,
    },
    h6: {
      'font-size': `1em`,
      'font-weight': `600`,
      'margin': `1.4rem 0 0.9rem`,
      'color': `#FFD3A0`,
    },

    // 段落
    p: {
      'margin': `1.2em 0`,
      'color': `#555555`,
      'font-size': `1.05rem`,
    },

    // 引用块（促销公告风格）
    blockquote: {
      'border-left': `4px solid #FF6B35`,
      'padding': `1.5rem`,
      'margin': `2rem 0`,
      'background': `var(--blockquote-background)`,
      'color': `#666666`,
      'font-style': `normal`,
      'border-radius': `0 6px 6px 0`,
    },

    blockquote_p: {
      margin: `0.8em 0`,
      color: `inherit`,
    },

    // 警告块（电商场景化）
    blockquote_note: {
      'border-left-color': `#4285F4`,
      'background': `#F0F7FF`,
    },
    blockquote_tip: {
      'border-left-color': `#34A853`,
      'background': `#F0FFF4`,
      'color': `#155724`,
    },
    blockquote_warning: {
      'border-left-color': `#FBBC05`,
      'background': `#FFF9E6`,
      'color': `#856404`,
    },
    blockquote_caution: {
      'border-left-color': `#EA4335`,
      'background': `#FFF0F0`,
      'color': `#721C24`,
    },

    blockquote_title: {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
      'font-weight': `700`,
      'margin-bottom': `0.8em`,
      'font-size': `1.1em`,
    },

    // 代码块（简洁风格）
    code_pre: {
      'background': `#F8F9FA`,
      'border-radius': `6px`,
      'padding': `1.5rem`,
      'overflow-x': `auto`,
      'font-family': `'Roboto Mono', monospace`,
      'font-size': `0.95em`,
      'line-height': `1.5`,
      'margin': `2rem 0`,
      'border': `1px solid #EEEEEE`,
    },

    // 行内代码
    code: {
      'background': `#F8F9FA`,
      'padding': `0.3em 0.5em`,
      'border-radius': `3px`,
      'font-family': `'Roboto Mono', monospace`,
      'font-size': `0.9em`,
      'color': `#E83E8C`,
      'border': `1px solid #EEEEEE`,
    },

    // 图片（商品展示风格）
    image: {
      'display': `block`,
      'max-width': `100%`,
      'height': `auto`,
      'margin': `2rem auto`,
      'border-radius': `8px`,
      'box-shadow': `0 4px 12px rgba(0,0,0,0.1)`,
      'transition': `transform 0.3s ease`,
    },

    // 列表（促销列表风格）
    ol: {
      'padding-left': `2em`,
      'margin': `1.8em 0`,
      'color': `#555555`,
    },
    ul: {
      'padding-left': `2em`,
      'margin': `1.8em 0`,
      'color': `#555555`,
      'list-style-type': `none`,
    },

    // 分隔线（促销风格）
    hr: {
      'border': `none`,
      'height': `4px`,
      'background': `linear-gradient(to right, #FF6B35, #FF8C42, #FFD3A0, #FF8C42, #FF6B35)`,
      'margin': `3rem 0`,
      'border-radius': `2px`,
    },

    // 脚注
    footnotes: {
      'border-top': `1px solid #EEEEEE`,
      'margin-top': `3.5rem`,
      'padding-top': `1.5rem`,
      'font-size': `0.85em`,
      'color': `#888888`,
    },
    figure: {
      margin: `1.5em 8px`,
      color: `hsl(var(--foreground))`,
    },
    blockquote_important: {},
    blockquote_title_note: {},
    blockquote_title_tip: {},
    blockquote_title_important: {},
    blockquote_title_warning: {},
    blockquote_title_caution: {},
    blockquote_p_note: {},
    blockquote_p_tip: {},
    blockquote_p_important: {},
    blockquote_p_warning: {},
    blockquote_p_caution: {},
  },
  inline: {
    wx_link: defaultTheme.inline.wx_link,
    table: {
      'border-collapse': `separate`,
      'width': `100%`,
      'margin': `2rem 0`,
      'font-size': `0.95em`,
      'border-spacing': `0`,
      'border-radius': `8px`,
      'overflow': `hidden`,
      'box-shadow': `0 2px 8px rgba(0,0,0,0.05)`,
    },
    thead: {
      'background': `#FF6B35`,
      'font-weight': `600`,
      'color': `white`,
    },
    td: {
      'padding': `1rem`,
      'border-bottom': `1px solid #EEEEEE`,
      'color': `#555555`,
    },
    listitem: {
      'margin': `0.6em 0`,
      'line-height': `1.7`,
    },

    codespan: {
      'background': `#F8F9FA`,
      'padding': `0.3em 0.5em`,
      'border-radius': `3px`,
      'font-family': `'Roboto Mono', monospace`,
      'font-size': `0.9em`,
      'color': `#E83E8C`,
      'border': `1px solid #EEEEEE`,
    },

    em: {
      'font-style': `italic`,
      'color': `#666666`,
    },

    link: {
      'color': `#FF6B35`,
      'text-decoration': `underline`,
      'text-decoration-color': `#FFD3A0`,
      'font-weight': `500`,
      'transition': `all 0.2s ease`,
    },

    strong: {
      'font-weight': `700`,
      'color': `#FF6B35`,
    },

    footnote: {
      'font-size': `0.85em`,
      'color': `#888888`,
    },

    figcaption: {
      'text-align': `center`,
      'font-size': `0.9em`,
      'color': `#888888`,
      'margin-top': `0.8rem`,
    },
  },
}

const literaryTheme: Theme = {
  base: {
    '--md-primary-color': `#8AA896`, // 主色调：莫兰迪绿
    '--blockquote-background': `#F1EDE5`, // 引用块背景
    'text-align': `left`,
    'line-height': `1.8`,
    'background': `#F9F7F3`, // 象牙白背景
    'color': `#5A5A5A`, // 主文字色
    'font-family': `"LXGW WenKai", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`, // 优先使用霞鹜文楷
  },
  block: {
    container: {
      'padding': `2rem 1.5rem`,
      'max-width': `680px`, // 适合公众号的阅读宽度
      'margin': `0 auto`,
      'background': `#FDFCFA`, // 内容区轻微提亮
      'box-shadow': `0 0 12px rgba(0,0,0,0.03)`,
    },

    // 标题（手写风格）
    h1: {
      'font-size': `1.8em`,
      'font-weight': `400`, // 去粗体
      'margin': `3rem 0 1.5rem`,
      'color': `#6E7F80`,
      'border-bottom': `1px dashed #D4C8B8`, // 虚线分隔
      'padding-bottom': `0.8rem`,
      'text-align': `center`,
      'font-family': `"LXGW ZhenKai", serif`, // 标题用更粗的手写体
    },
    h2: {
      'font-size': `1.5em`,
      'font-weight': `400`,
      'margin': `2.5rem 0 1.3rem`,
      'color': `#7D8E8E`,
      'border-left': `3px solid #D4C8B8`,
      'padding-left': `1rem`,
    },
    h3: {
      'font-size': `1.3em`,
      'font-weight': `400`,
      'margin': `2rem 0 1.1rem`,
      'color': `#8A9A9A`,
      'text-decoration': `underline`,
      'text-decoration-color': `#D4C8B8`,
      'text-decoration-thickness': `1px`,
    },
    h4: {
      'font-size': `1.1em`,
      'font-weight': `400`,
      'margin': `1.8rem 0 1rem`,
      'color': `#8AA896`,
      'font-style': `italic`,
    },
    h5: {
      'font-size': `1em`,
      'font-weight': `400`,
      'margin': `1.6rem 0 0.9rem`,
      'color': `#9AB0A0`,
    },
    h6: {
      'font-size': `0.9em`,
      'font-weight': `400`,
      'margin': `1.4rem 0 0.8rem`,
      'color': `#A8B8AA`,
    },

    // 段落（首行缩进）
    p: {
      'margin': `1.2em 0`,
      'color': `#5A5A5A`,
      'font-size': `1.05rem`,
      'text-indent': `2em`, // 中文段落首行缩进
      'letter-spacing': `0.05em`, // 字间距
      'text-align': `justify`,
      'hyphens': `auto`,
    },

    // 引用块（古籍样式）
    blockquote: {
      'border-left': `none`,
      'padding': `1.5rem 2rem`,
      'margin': `2rem 0`,
      'background': `var(--blockquote-background)`,
      'color': `#6D6D6D`,
      'font-style': `normal`,
      'border-radius': `0`,
      'position': `relative`,
      'font-family': `"LXGW WenKai", serif`,
    },

    blockquote_p: {
      'margin': `0.5em 0`,
      'color': `inherit`,
      'font-size': `0.95em`,
    },

    // 代码块（复古印刷风）
    code_pre: {
      'background': `#F1EDE5`,
      'border-radius': `0`,
      'padding': `1.5rem`,
      'overflow-x': `auto`,
      'font-family': `"LXGW WenKai Mono", monospace`,
      'font-size': `0.95em`,
      'line-height': `1.6`,
      'margin': `2rem 0`,
      'border': `1px solid #D4C8B8`,
      'color': `#5A5A5A`,
    },

    // 行内代码
    code: {
      'background': `#F1EDE5`,
      'padding': `0.2em 0.4em`,
      'border-radius': `0`,
      'font-family': `"LXGW WenKai Mono", monospace`,
      'font-size': `0.9em`,
      'color': `#8AA896`,
      'border': `1px solid #D4C8B8`,
    },

    // 图片（复古相框效果）
    image: {
      'display': `block`,
      'max-width': `90%`,
      'height': `auto`,
      'margin': `2.5rem auto`,
      'border': `1px solid #D4C8B8`,
      'padding': `6px`,
      'background': `white`,
      'box-shadow': `0 2px 8px rgba(0,0,0,0.05)`,
      'filter': `sepia(15%) brightness(98%)`, // 复古滤镜
    },

    // 列表（手写风格）
    ol: {
      'padding-left': `2.5em`,
      'margin': `2rem 0`,
      'color': `#5A5A5A`,
      'list-style-type': `cjk-ideographic`, // 中文数字
    },
    ul: {
      'padding-left': `2.5em`,
      'margin': `2rem 0`,
      'color': `#5A5A5A`,
      'list-style-type': `none`,
    },

    // 表格（极简边框）
    // table: {
    //   'border-collapse': `collapse`,
    //   'width': `100%`,
    //   'margin': `2.5rem 0`,
    //   'font-size': `0.95em`,
    //   'border': `1px solid #D4C8B8`,
    // },
    // thead: {
    //   'background': `#F1EDE5`,
    //   'font-weight': `400`,
    // },
    // td: {
    //   padding: `0.8rem 1.2rem`,
    //   border: `1px solid #D4C8B8`,
    // },
    figure: {},
    blockquote_title: {},
    blockquote_note: {},
    blockquote_tip: {},
    blockquote_important: {},
    blockquote_warning: {},
    blockquote_caution: {},
    blockquote_title_note: {},
    blockquote_title_tip: {},
    blockquote_title_important: {},
    blockquote_title_warning: {},
    blockquote_title_caution: {},
    blockquote_p_note: {},
    blockquote_p_tip: {},
    blockquote_p_important: {},
    blockquote_p_warning: {},
    blockquote_p_caution: {},
    // 分隔线（手绘虚线）
    hr: {
      border: `none`,
      height: `1px`,
      background: `repeating-linear-gradient(to right, #D4C8B8, #D4C8B8 4px, transparent 4px, transparent 8px)`,
      margin: `3.5rem 0`,
    },

    // 脚注（古籍注疏样式）
    footnotes: {
      'border-top': `1px dashed #D4C8B8`,
      'margin-top': `4rem`,
      'padding-top': `1.5rem`,
      'font-size': `0.85em`,
      'color': `#8A8A8A`,
    },
  },
  inline: {
    wx_link: defaultTheme.inline.wx_link,
    table: defaultTheme.inline.table,
    thead: defaultTheme.inline.thead,
    td: defaultTheme.inline.td,
    listitem: {
      'margin': `0.8em 0`,
      'line-height': `1.8`,
    },

    codespan: {
      'background': `#F1EDE5`,
      'padding': `0.2em 0.4em`,
      'border-radius': `0`,
      'font-family': `"LXGW WenKai Mono", monospace`,
      'font-size': `0.9em`,
      'color': `#8AA896`,
      'border': `1px solid #D4C8B8`,
    },

    em: {
      'font-style': `italic`,
      'color': `#6E7F80`,
    },

    link: {
      'color': `#8AA896`,
      'text-decoration': `underline`,
      'text-decoration-color': `#D4C8B8`,
      'text-underline-offset': `0.2em`,
      'transition': `all 0.2s ease`,
    },

    strong: {
      'font-weight': `500`, // 适度加粗
      'color': `#6E7F80`,
      'letter-spacing': `0.02em`,
    },

    footnote: {
      'font-size': `0.85em`,
      'color': `#8A8A8A`,
      'vertical-align': `super`,
    },

    figcaption: {
      'text-align': `center`,
      'font-size': `0.9em`,
      'color': `#8A8A8A`,
      'margin-top': `0.5rem`,
      'font-style': `italic`,
    },
  },
}

const newsTheme: Theme = {
  base: {
    '--md-primary-color': `#C33C2D`, // 主色调：报业红
    '--blockquote-background': `#F5F5F5`, // 引用块背景
    'text-align': `left`,
    'line-height': `1.75`,
    'background': `#FFFFFF`,
    'color': `#222222`, // 高对比度文字
    'font-family': `"PingFang SC", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif`,
  },
  block: {
    container: {
      'padding': `1.5rem`,
      'max-width': `740px`, // 新闻标准宽度
      'margin': `0 auto`,
      'border-top': `4px solid #C33C2D`, // 报头红线
    },

    // 标题（报刊风格）
    h1: {
      'font-size': `1.8em`,
      'font-weight': `700`,
      'margin': `1.5rem 0 1rem`,
      'color': `#222222`,
      'border-left': `4px solid #C33C2D`,
      'padding-left': `1rem`,
      'line-height': `1.3`,
    },
    h2: {
      'font-size': `1.5em`,
      'font-weight': `600`,
      'margin': `1.8rem 0 1rem`,
      'color': `#333333`,
      'border-bottom': `1px solid #E0E0E0`,
      'padding-bottom': `0.5rem`,
    },
    h3: {
      'font-size': `1.3em`,
      'font-weight': `600`,
      'margin': `1.6rem 0 0.9rem`,
      'color': `#444444`,
    },
    h4: {
      'font-size': `1.1em`,
      'font-weight': `500`,
      'margin': `1.4rem 0 0.8rem`,
      'color': `#C33C2D`, // 小标题用主色
    },
    h5: {
      'font-size': `1em`,
      'font-weight': `500`,
      'margin': `1.2rem 0 0.7rem`,
      'color': `#666666`,
    },
    h6: {
      'font-size': `0.9em`,
      'font-weight': `500`,
      'margin': `1rem 0 0.6rem`,
      'color': `#888888`,
    },

    // 段落（紧凑排版）
    p: {
      'margin': `0.8em 0`,
      'color': `#222222`,
      'font-size': `1rem`,
      'text-align': `justify`,
      'text-justify': `inter-character`, // 优化中文对齐
    },

    // 引用块（新闻摘录样式）
    blockquote: {
      'border-left': `3px solid #999999`,
      'padding': `1rem 1.5rem`,
      'margin': `1.5rem 0`,
      'background': `var(--blockquote-background)`,
      'color': `#444444`,
      'font-style': `normal`,
      'font-size': `0.95em`,
    },

    blockquote_p: {
      margin: `0.5em 0`,
      color: `inherit`,
    },

    // 代码块（简约风格）
    code_pre: {
      'background': `#F5F5F5`,
      'border-radius': `4px`,
      'padding': `1.2rem`,
      'overflow-x': `auto`,
      'font-family': `"Courier New", Courier, monospace`,
      'font-size': `0.9em`,
      'line-height': `1.5`,
      'margin': `1.5rem 0`,
      'border': `1px solid #E0E0E0`,
    },

    // 行内代码
    code: {
      'background': `#F5F5F5`,
      'padding': `0.2em 0.4em`,
      'border-radius': `3px`,
      'font-family': `"Courier New", Courier, monospace`,
      'font-size': `0.9em`,
      'color': `#C33C2D`,
      'border': `1px solid #E0E0E0`,
    },

    // 图片（标准新闻配图）
    image: {
      'display': `block`,
      'max-width': `100%`,
      'height': `auto`,
      'margin': `1.5rem auto`,
      'border': `none`,
    },

    // 列表（紧凑排版）
    ol: {
      'padding-left': `1.8em`,
      'margin': `1.2rem 0`,
      'color': `#222222`,
    },
    ul: {
      'padding-left': `1.8em`,
      'margin': `1.2rem 0`,
      'color': `#222222`,
      'list-style-type': `disc`,
    },

    // 表格（数据表格样式）
    // table: {
    //   'border-collapse': `collapse`,
    //   'width': `100%`,
    //   'margin': `1.5rem 0`,
    //   'font-size': `0.95em`,
    //   'border': `1px solid #E0E0E0`,
    // },
    // thead: {
    //   'background': `#F5F5F5`,
    //   'font-weight': `600`,
    // },
    // td: {
    //   padding: `0.8rem 1rem`,
    //   border: `1px solid #E0E0E0`,
    // },

    // 分隔线（报刊分隔线）
    hr: {
      border: `none`,
      height: `1px`,
      background: `#E0E0E0`,
      margin: `2rem 0`,
    },

    // 脚注（新闻来源样式）
    footnotes: {
      'border-top': `1px solid #E0E0E0`,
      'margin-top': `2.5rem`,
      'padding-top': `1rem`,
      'font-size': `0.85em`,
      'color': `#666666`,
    },
    figure: {},
    blockquote_title: {},
    blockquote_note: {},
    blockquote_tip: {},
    blockquote_important: {},
    blockquote_warning: {},
    blockquote_caution: {},
    blockquote_title_note: {},
    blockquote_title_tip: {},
    blockquote_title_important: {},
    blockquote_title_warning: {},
    blockquote_title_caution: {},
    blockquote_p_note: {},
    blockquote_p_tip: {},
    blockquote_p_important: {},
    blockquote_p_warning: {},
    blockquote_p_caution: {},
  },
  inline: {
    wx_link: defaultTheme.inline.wx_link,
    table: defaultTheme.inline.table,
    thead: defaultTheme.inline.thead,
    td: defaultTheme.inline.td,
    listitem: {
      'margin': `0.4em 0`,
      'line-height': `1.6`,
    },

    codespan: {
      'background': `#F5F5F5`,
      'padding': `0.2em 0.4em`,
      'border-radius': `3px`,
      'font-family': `"Courier New", Courier, monospace`,
      'font-size': `0.9em`,
      'color': `#C33C2D`,
      'border': `1px solid #E0E0E0`,
    },

    em: {
      'font-style': `italic`,
      'color': `#444444`,
    },

    link: {
      'color': `#1A73E8`, // 蓝色链接更符合新闻习惯
      'text-decoration': `none`,
      'border-bottom': `1px solid rgba(26,115,232,0.3)`,
    },

    strong: {
      'font-weight': `600`,
      'color': `#222222`,
    },

    footnote: {
      'font-size': `0.85em`,
      'color': `#666666`,
    },

    figcaption: {
      'text-align': `center`,
      'font-size': `0.85em`,
      'color': `#666666`,
      'margin-top': `0.5rem`,
    },
  },
}

const pinkTheme: Theme = {
  base: {
    '--md-primary-color': `#FF85A2`, // 主色调：樱花粉
    '--blockquote-background': `#FFF0F5`, // 引用块背景
    'text-align': `left`,
    'line-height': `1.7`,
    'background': `#FFF9FA`, // 浅粉背景
    'color': `#5A3E36`, // 深棕文字（保证可读性）
    'font-family': `"Hiragino Sans GB", "Microsoft YaHei", sans-serif`,
  },
  block: {
    figure: {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5rem`,
      'margin': `1rem 0`,
      'color': `#5A3E36`,
      'font-size': `1rem`,
      'text-align': `justify`,
    },
    container: {
      'padding': `2rem`,
      'max-width': `680px`,
      'margin': `0 auto`,
      'background': `#FFFDFD`,
    },

    // 标题（爱心元素）
    h1: {
      'font-size': `1.8em`,
      'font-weight': `600`,
      'margin': `2rem 0 1.5rem`,
      'color': `#FF4F8B`,
      'text-align': `center`,
      'position': `relative`,
    },
    h2: {
      'font-size': `1.5em`,
      'font-weight': `500`,
      'margin': `1.8rem 0 1.2rem`,
      'color': `#FF6B9D`,
      'border-bottom': `2px dotted #FFC0D5`,
    },
    h3: {
      'font-size': `1.3em`,
      'font-weight': `500`,
      'margin': `1.6rem 0 1rem`,
      'color': `#FF85A2`,
      'padding-left': `0.8rem`,
      'border-left': `3px solid #FFC0D5`,
    },
    h4: {
      'font-size': `1.1em`,
      'font-weight': `500`,
      'margin': `1.4rem 0 0.9rem`,
      'color': `#FF9EB5`,
    },
    h5: {
      'font-size': `1em`,
      'font-weight': `500`,
      'margin': `1.2rem 0 0.8rem`,
      'color': `#FFB7C8`,
    },
    h6: {
      'font-size': `0.9em`,
      'font-weight': `500`,
      'margin': `1rem 0 0.7rem`,
      'color': `#FFD0DC`,
    },

    // 段落
    p: {
      'margin': `1em 0`,
      'color': `#5A3E36`,
      'font-size': `1rem`,
      'text-align': `justify`,
    },

    // 引用块（粉色渐变）
    blockquote: {
      'border-left': `3px solid #FF85A2`,
      'padding': `1.2rem 1.5rem`,
      'margin': `1.5rem 0`,
      'background': `var(--blockquote-background)`,
      'color': `#7A4E4A`,
      'border-radius': `0 8px 8px 0`,
    },

    blockquote_p: {
      margin: `0.6em 0`,
      color: `inherit`,
    },

    // 警告块（糖果色系）
    blockquote_note: {
      'border-left-color': `#8BD3F0`,
      'background': `#F0FAFF`,
    },
    blockquote_tip: {
      'border-left-color': `#A0E6B4`,
      'background': `#F0FFF4`,
    },
    blockquote_warning: {
      'border-left-color': `#FFD166`,
      'background': `#FFF9E6`,
    },
    blockquote_caution: {
      'border-left-color': `#FF9B9B`,
      'background': `#FFF0F0`,
    },

    blockquote_title: {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
      'font-weight': `500`,
      'margin-bottom': `0.6em`,
    },

    blockquote_important: {},
    blockquote_title_note: {},
    blockquote_title_tip: {},
    blockquote_title_important: {},
    blockquote_title_warning: {},
    blockquote_title_caution: {},
    blockquote_p_note: {},
    blockquote_p_tip: {},
    blockquote_p_important: {},
    blockquote_p_warning: {},
    blockquote_p_caution: {},

    // 代码块（柔和风格）
    code_pre: {
      'background': `#FFF0F5`,
      'border-radius': `8px`,
      'padding': `1.2rem`,
      'overflow-x': `auto`,
      'font-family': `Consolas, Monaco, monospace`,
      'font-size': `0.9em`,
      'line-height': `1.5`,
      'margin': `1.5rem 0`,
      'border': `1px solid #FFD0DC`,
    },

    // 行内代码
    code: {
      'background': `#FFF0F5`,
      'padding': `0.2em 0.4em`,
      'border-radius': `4px`,
      'font-family': `Consolas, Monaco, monospace`,
      'font-size': `0.9em`,
      'color': `#E83E8C`,
      'border': `1px solid #FFD0DC`,
    },

    // 图片（糖果包装效果）
    image: {
      'display': `block`,
      'max-width': `90%`,
      'height': `auto`,
      'margin': `1.5rem auto`,
      'border-radius': `12px`,
      'border': `3px solid #FFD0DC`,
      'box-shadow': `0 4px 12px rgba(255,143,178,0.2)`,
    },

    // 列表（爱心项目符号）
    ol: {
      'padding-left': `2em`,
      'margin': `1.5rem 0`,
      'color': `#5A3E36`,
    },
    ul: {
      'padding-left': `2em`,
      'margin': `1.5rem 0`,
      'color': `#5A3E36`,
      'list-style-type': `none`,
    },

    // 分隔线（波浪线）
    hr: {
      'border': `none`,
      'height': `6px`,
      'background': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='%23FF85A2' d='M0,2 C5,0 5,4 10,2 C15,0 15,4 20,2 '/%3E%3C/svg%3E") repeat-x`,
      'margin': `2rem 0`,
      'background-size': `20px 6px`,
    },

    // 脚注
    footnotes: {
      'border-top': `1px dashed #FFC0D5`,
      'margin-top': `3rem`,
      'padding-top': `1.5rem`,
      'font-size': `0.85em`,
      'color': `#9A7A75`,
    },
  },
  inline: {
    // 表格（柔和边框）
    table: {
      'border-collapse': `separate`,
      'width': `100%`,
      'margin': `1.5rem 0`,
      'border-spacing': `0`,
      'border-radius': `8px`,
      'overflow': `hidden`,
      'box-shadow': `0 2px 8px rgba(255,143,178,0.1)`,
    },
    thead: {
      'background': `#FFE5EE`,
      'font-weight': `500`,
    },
    td: {
      'padding': `0.8rem 1rem`,
      'border-bottom': `1px solid #FFE5EE`,
    },
    listitem: {
      'margin': `0.5em 0`,
      'line-height': `1.7`,
      'position': `relative`,
      'padding-left': `1.2em`,
    },

    codespan: {
      'background': `#FFF0F5`,
      'padding': `0.2em 0.4em`,
      'border-radius': `4px`,
      'font-family': `Consolas, Monaco, monospace`,
      'font-size': `0.9em`,
      'color': `#E83E8C`,
      'border': `1px solid #FFD0DC`,
    },

    em: {
      'font-style': `italic`,
      'color': `#7A4E4A`,
    },

    link: {
      'color': `#FF6B9D`,
      'text-decoration': `underline`,
      'text-decoration-color': `#FFC0D5`,
    },

    strong: {
      'font-weight': `600`,
      'color': `#FF4F8B`,
    },

    footnote: {
      'font-size': `0.85em`,
      'color': `#9A7A75`,
    },

    figcaption: {
      'text-align': `center`,
      'font-size': `0.9em`,
      'color': `#9A7A75`,
      'margin-top': `0.8rem`,
    },
  },
}

const luxuryTheme: Theme = {
  base: {
    '--md-primary-color': `#D4AF37`, // 主色调：金色
    '--blockquote-background': `rgba(212, 175, 55, 0.08)`, // 引用块背景
    'text-align': `left`,
    'line-height': `1.8`,
    'background': `#111111`, // 纯黑背景
    'color': `#EEEEEE`, // 浅灰文字
    'font-family': `"Georgia", "Times New Roman", serif`,
  },
  block: {
    container: {
      'padding': `2.5rem`,
      'max-width': `800px`,
      'margin': `0 auto`,
      'border': `1px solid rgba(212, 175, 55, 0.3)`,
    },

    // 标题（烫金效果）
    h1: {
      'font-size': `2.2em`,
      'font-weight': `600`,
      'margin': `3rem 0 2rem`,
      'color': `#D4AF37`,
      'text-align': `center`,
      'letter-spacing': `0.05em`,
      'text-shadow': `0 0 10px rgba(212, 175, 55, 0.3)`,
    },
    h2: {
      'font-size': `1.8em`,
      'font-weight': `500`,
      'margin': `2.5rem 0 1.8rem`,
      'color': `#E6C873`,
      'border-bottom': `1px solid rgba(212, 175, 55, 0.3)`,
      'padding-bottom': `0.5rem`,
    },
    h3: {
      'font-size': `1.5em`,
      'font-weight': `500`,
      'margin': `2.2rem 0 1.5rem`,
      'color': `#C9B367`,
      'padding-left': `1rem`,
      'border-left': `2px solid rgba(212, 175, 55, 0.5)`,
    },
    h4: {
      'font-size': `1.3em`,
      'font-weight': `500`,
      'margin': `2rem 0 1.3rem`,
      'color': `#B3A05D`,
    },
    h5: {
      'font-size': `1.1em`,
      'font-weight': `500`,
      'margin': `1.8rem 0 1.1rem`,
      'color': `#9C8D52`,
    },
    h6: {
      'font-size': `1em`,
      'font-weight': `500`,
      'margin': `1.6rem 0 1rem`,
      'color': `#867A47`,
    },

    // 段落
    p: {
      'margin': `1.2em 0`,
      'color': `#DDDDDD`,
      'font-size': `1.05rem`,
      'letter-spacing': `0.02em`,
    },

    // 引用块（鎏金边框）
    blockquote: {
      'border-left': `3px solid #D4AF37`,
      'padding': `1.5rem`,
      'margin': `2rem 0`,
      'background': `var(--blockquote-background)`,
      'color': `#CCCCCC`,
      'font-style': `italic`,
      'position': `relative`,
    },

    blockquote_p: {
      margin: `0.8em 0`,
      color: `inherit`,
    },

    // 警告块（金属质感）
    blockquote_note: {
      'border-left-color': `#5D8BF4`,
      'background': `rgba(93, 139, 244, 0.08)`,
    },
    blockquote_tip: {
      'border-left-color': `#57C785`,
      'background': `rgba(87, 199, 133, 0.08)`,
    },
    blockquote_warning: {
      'border-left-color': `#F4B740`,
      'background': `rgba(244, 183, 64, 0.08)`,
    },
    blockquote_caution: {
      'border-left-color': `#E5534B`,
      'background': `rgba(229, 83, 75, 0.08)`,
    },

    blockquote_title: {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
      'font-weight': `500`,
      'margin-bottom': `1em`,
      'color': `#D4AF37`,
    },

    // 代码块（黑金终端）
    code_pre: {
      'background': `#0A0A0A`,
      'border-radius': `4px`,
      'padding': `1.5rem`,
      'overflow-x': `auto`,
      'font-family': `"Courier New", Courier, monospace`,
      'font-size': `0.95em`,
      'line-height': `1.6`,
      'margin': `2rem 0`,
      'border': `1px solid rgba(212, 175, 55, 0.3)`,
      'color': `#D4AF37`,
    },

    // 行内代码
    code: {
      'background': `rgba(212, 175, 55, 0.1)`,
      'padding': `0.3em 0.5em`,
      'border-radius': `3px`,
      'font-family': `"Courier New", Courier, monospace`,
      'font-size': `0.9em`,
      'color': `#D4AF37`,
      'border': `1px solid rgba(212, 175, 55, 0.3)`,
    },

    // 图片（金色边框）
    image: {
      'display': `block`,
      'max-width': `100%`,
      'height': `auto`,
      'margin': `2rem auto`,
      'border': `2px solid rgba(212, 175, 55, 0.5)`,
      'box-shadow': `0 0 20px rgba(212, 175, 55, 0.1)`,
    },

    // 列表（金色标记）
    ol: {
      'padding-left': `2.5em`,
      'margin': `2rem 0`,
      'color': `#EEEEEE`,
      'list-style-type': `none`,
      'counter-reset': `li`,
    },
    ul: {
      'padding-left': `2.5em`,
      'margin': `2rem 0`,
      'color': `#EEEEEE`,
      'list-style-type': `none`,
    },

    // 分隔线（金属质感）
    hr: {
      border: `none`,
      height: `1px`,
      background: `linear-gradient(to right, transparent, rgba(212, 175, 55, 0.5), transparent)`,
      margin: `3rem 0`,
    },

    // 脚注（烫金小字）
    footnotes: {
      'border-top': `1px solid rgba(212, 175, 55, 0.3)`,
      'margin-top': `4rem`,
      'padding-top': `1.5rem`,
      'font-size': `0.85em`,
      'color': `#AAAAAA`,
    },
  },
  inline: {
    // 表格（高级数据表）
    table: {
      'border-collapse': `collapse`,
      'width': `100%`,
      'margin': `2.5rem 0`,
      'border': `1px solid rgba(212, 175, 55, 0.3)`,
    },
    thead: {
      'background': `rgba(212, 175, 55, 0.1)`,
      'font-weight': `500`,
      'color': `#D4AF37`,
    },
    td: {
      padding: `1rem`,
      border: `1px solid rgba(212, 175, 55, 0.2)`,
      color: `#DDDDDD`,
    },
    listitem: {
      'margin': `0.8em 0`,
      'line-height': `1.8`,
      'position': `relative`,
      'padding-left': `1.5em`,
    },

    codespan: {
      'background': `rgba(212, 175, 55, 0.1)`,
      'padding': `0.3em 0.5em`,
      'border-radius': `3px`,
      'font-family': `"Courier New", Courier, monospace`,
      'font-size': `0.9em`,
      'color': `#D4AF37`,
      'border': `1px solid rgba(212, 175, 55, 0.3)`,
    },

    em: {
      'font-style': `italic`,
      'color': `#CCCCCC`,
    },

    link: {
      'color': `#D4AF37`,
      'text-decoration': `none`,
      'border-bottom': `1px dotted rgba(212, 175, 55, 0.5)`,
    },

    strong: {
      'font-weight': `600`,
      'color': `#D4AF37`,
      'letter-spacing': `0.03em`,
    },

    footnote: {
      'font-size': `0.85em`,
      'color': `#AAAAAA`,
    },

    figcaption: {
      'text-align': `center`,
      'font-size': `0.9em`,
      'color': `#AAAAAA`,
      'margin-top': `1rem`,
      'font-style': `italic`,
    },
  },
}

const kidsTheme: Theme = {
  base: {
    '--md-primary-color': `#5E9DD9`, // 主色调：天蓝色
    '--blockquote-background': `#E8F4FF`, // 引用块背景
    'text-align': `left`,
    'line-height': `1.8`,
    'background': `#FFFFFF`, // 纯白背景
    'color': `#333333`, // 深灰文字
    'font-family': `"Ma Shan Zheng", "Comic Sans MS", "Marker Felt", sans-serif`, // 优先使用站酷酷圆
  },
  block: {
    container: {
      'padding': `1.5rem`,
      'max-width': `700px`,
      'margin': `0 auto`,
      'background': `#FFFFFF`,
    },

    // 标题（卡通风格）
    h1: {
      'font-size': `2em`,
      'font-weight': `normal`,
      'margin': `2rem 0 1.5rem`,
      'color': `#5E9DD9`,
      'text-align': `center`,
      'text-decoration': `underline wavy`,
      'text-decoration-color': `#FFB74D`,
    },
    h2: {
      'font-size': `1.6em`,
      'font-weight': `normal`,
      'margin': `1.8rem 0 1.3rem`,
      'color': `#FF6B00`, // 橙色
      'border-bottom': `3px dotted #5E9DD9`,
    },
    h3: {
      'font-size': `1.4em`,
      'font-weight': `normal`,
      'margin': `1.6rem 0 1.1rem`,
      'color': `#4CAF50`, // 绿色
      'padding-left': `0.5rem`,
      'border-left': `4px solid #FFB74D`,
    },
    h4: {
      'font-size': `1.2em`,
      'font-weight': `normal`,
      'margin': `1.4rem 0 1rem`,
      'color': `#9C27B0`, // 紫色
    },
    h5: {
      'font-size': `1.1em`,
      'font-weight': `normal`,
      'margin': `1.2rem 0 0.9rem`,
      'color': `#FF5722`, // 橙红
    },
    h6: {
      'font-size': `1em`,
      'font-weight': `normal`,
      'margin': `1rem 0 0.8rem`,
      'color': `#009688`, // 青绿
    },

    // 段落（宽松排版）
    p: {
      'margin': `1em 0`,
      'color': `#333333`,
      'font-size': `1.1rem`,
      'line-height': `1.9`,
    },

    // 引用块（云朵气泡）
    blockquote: {
      'border-left': `none`,
      'padding': `1.2rem 1.8rem`,
      'margin': `1.8rem 0`,
      'background': `var(--blockquote-background)`,
      'color': `#333333`,
      'border-radius': `20px`,
      'box-shadow': `5px 5px 0 rgba(94,157,217,0.2)`,
    },

    blockquote_p: {
      margin: `0.8em 0`,
      color: `inherit`,
    },

    // 警告块（彩色标签）
    blockquote_note: {
      'background': `#E3F2FD`,
      'border-left': `4px solid #2196F3`,
    },
    blockquote_tip: {
      'background': `#E8F5E9`,
      'border-left': `4px solid #4CAF50`,
    },
    blockquote_warning: {
      'background': `#FFF8E1`,
      'border-left': `4px solid #FFC107`,
    },
    blockquote_caution: {
      'background': `#FFEBEE`,
      'border-left': `4px solid #F44336`,
    },

    blockquote_title: {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
      'font-weight': `bold`,
      'margin-bottom': `0.8em`,
      'color': `inherit`,
    },

    // 代码块（积木风格）
    code_pre: {
      'background': `#F5F5F5`,
      'border-radius': `12px`,
      'padding': `1.2rem`,
      'overflow-x': `auto`,
      'font-family': `"Comic Mono", "Courier New", monospace`,
      'font-size': `1em`,
      'line-height': `1.6`,
      'margin': `1.8rem 0`,
      'border': `3px solid #5E9DD9`,
      'color': `#FF6B00`,
    },

    // 行内代码
    code: {
      'background': `#FFF3E0`,
      'padding': `0.3em 0.5em`,
      'border-radius': `6px`,
      'font-family': `"Comic Mono", monospace`,
      'font-size': `1em`,
      'color': `#FF6B00`,
      'border': `2px solid #FFB74D`,
    },

    // 图片（卡通边框）
    image: {
      'display': `block`,
      'max-width': `90%`,
      'height': `auto`,
      'margin': `1.8rem auto`,
      'border': `4px solid #5E9DD9`,
      'border-radius': `16px`,
      'box-shadow': `8px 8px 0 rgba(94,157,217,0.2)`,
    },

    // 列表（彩色标记）
    ol: {
      'padding-left': `2.5em`,
      'margin': `1.8rem 0`,
      'color': `#333333`,
      'list-style-type': `none`,
      'counter-reset': `li`,
    },
    ul: {
      'padding-left': `2.5em`,
      'margin': `1.8rem 0`,
      'color': `#333333`,
      'list-style-type': `none`,
    },

    // 表格（乐高风格）
    table: {
      'border-collapse': `separate`,
      'width': `100%`,
      'margin': `2rem 0`,
      'border-spacing': `0`,
      'border-radius': `12px`,
      'overflow': `hidden`,
      'box-shadow': `5px 5px 0 rgba(94,157,217,0.2)`,
    },
    thead: {
      'background': `#5E9DD9`,
      'color': `white`,
      'font-weight': `bold`,
    },
    td: {
      'padding': `1rem`,
      'border-bottom': `2px solid #E3F2FD`,
      'background': `#FFFFFF`,
    },

    // 分隔线（彩虹虚线）
    hr: {
      'border': `none`,
      'height': `4px`,
      'background': `repeating-linear-gradient(to right, #5E9DD9, #4CAF50, #FFC107, #FF5722, #9C27B0, #5E9DD9)`,
      'margin': `3rem 0`,
      'background-size': `200% 100%`,
    },

    // 脚注（友好提示）
    footnotes: {
      'border-top': `2px dotted #5E9DD9`,
      'margin-top': `3rem`,
      'padding-top': `1.5rem`,
      'font-size': `0.9em`,
      'color': `#666666`,
    },
  },
  inline: {
    listitem: {
      'margin': `0.8em 0`,
      'line-height': `1.8`,
      'position': `relative`,
      'padding-left': `1.8em`,
    },

    codespan: {
      'background': `#FFF3E0`,
      'padding': `0.3em 0.5em`,
      'border-radius': `6px`,
      'font-family': `"Comic Mono", monospace`,
      'font-size': `1em`,
      'color': `#FF6B00`,
      'border': `2px solid #FFB74D`,
    },

    em: {
      'font-style': `italic`,
      'color': `#5E9DD9`,
    },

    link: {
      'color': `#FF6B00`,
      'text-decoration': `underline`,
      'text-decoration-color': `#FFB74D`,
      'text-decoration-style': `wavy`,
    },

    strong: {
      'font-weight': `bold`,
      'color': `#FF5722`,
    },

    footnote: {
      'font-size': `0.9em`,
      'color': `#666666`,
    },

    figcaption: {
      'text-align': `center`,
      'font-size': `1em`,
      'color': `#5E9DD9`,
      'margin-top': `0.8rem`,
      'font-weight': `bold`,
    },
  },
}

const readingTheme: Theme = {
  base: {
    '--md-primary-color': `#4A6FA5`, // 主色调：深蓝色
    '--blockquote-background': `#F8F9FA`, // 引用块背景
    'text-align': `left`,
    'line-height': `1.8`,
    'background': `#FAFAFA`, // 浅灰背景
    'color': `#333333`, // 深灰文字
    'font-family': `"Noto Serif SC", "Source Han Serif", "SimSun", serif`, // 优先使用思源宋体
  },
  block: {
    container: {
      'padding': `2rem`,
      'max-width': `680px`, // 适合阅读的宽度
      'margin': `0 auto`,
      'background': `#FFFFFF`,
      'box-shadow': `0 2px 10px rgba(0,0,0,0.05)`,
    },

    // 标题（学术风格）
    h1: {
      'font-size': `1.8em`,
      'font-weight': `600`,
      'margin': `3rem 0 1.5rem`,
      'color': `#2C3E50`,
      'text-align': `center`,
      'padding-bottom': `0.8rem`,
      'border-bottom': `1px solid #E0E0E0`,
    },
    h2: {
      'font-size': `1.5em`,
      'font-weight': `600`,
      'margin': `2.5rem 0 1.3rem`,
      'color': `#2C3E50`,
      'padding-left': `0.8rem`,
      'border-left': `3px solid #4A6FA5`,
    },
    h3: {
      'font-size': `1.3em`,
      'font-weight': `500`,
      'margin': `2.2rem 0 1.1rem`,
      'color': `#34495E`,
    },
    h4: {
      'font-size': `1.1em`,
      'font-weight': `500`,
      'margin': `2rem 0 1rem`,
      'color': `#4A6FA5`,
    },
    h5: {
      'font-size': `1em`,
      'font-weight': `500`,
      'margin': `1.8rem 0 0.9rem`,
      'color': `#7F8C8D`,
    },
    h6: {
      'font-size': `0.9em`,
      'font-weight': `500`,
      'margin': `1.6rem 0 0.8rem`,
      'color': `#95A5A6`,
    },

    // 段落（优化阅读体验）
    p: {
      'margin': `1.2em 0`,
      'color': `#333333`,
      'font-size': `1.05rem`,
      'text-align': `justify`,
      'text-justify': `inter-ideograph`,
      'hyphens': `auto`,
      'letter-spacing': `0.02em`,
    },

    // 引用块（学术引用样式）
    blockquote: {
      'border-left': `3px solid #4A6FA5`,
      'padding': `1.2rem 1.5rem`,
      'margin': `1.8rem 0`,
      'background': `var(--blockquote-background)`,
      'color': `#555555`,
      'font-style': `normal`,
      'font-size': `0.95em`,
    },

    blockquote_p: {
      margin: `0.8em 0`,
      color: `inherit`,
    },

    // 代码块（阅读友好型）
    code_pre: {
      'background': `#F5F7F9`,
      'border-radius': `4px`,
      'padding': `1.3rem`,
      'overflow-x': `auto`,
      'font-family': `"Source Code Pro", "Roboto Mono", monospace`,
      'font-size': `0.95em`,
      'line-height': `1.6`,
      'margin': `2rem 0`,
      'border': `1px solid #E0E0E0`,
      'color': `#2C3E50`,
    },

    // 行内代码
    code: {
      'background': `#F0F3F6`,
      'padding': `0.2em 0.4em`,
      'border-radius': `3px`,
      'font-family': `"Source Code Pro", monospace`,
      'font-size': `0.9em`,
      'color': `#4A6FA5`,
      'border': `1px solid #D6E0E8`,
    },

    // 图片（简洁风格）
    image: {
      'display': `block`,
      'max-width': `90%`,
      'height': `auto`,
      'margin': `2rem auto`,
      'border-radius': `4px`,
    },

    // 列表（清晰排版）
    ol: {
      'padding-left': `2em`,
      'margin': `1.8rem 0`,
      'color': `#333333`,
    },
    ul: {
      'padding-left': `2em`,
      'margin': `1.8rem 0`,
      'color': `#333333`,
    },

    // 表格（数据清晰呈现）
    table: {
      'border-collapse': `collapse`,
      'width': `100%`,
      'margin': `2rem 0`,
      'font-size': `0.95em`,
      'border': `1px solid #E0E0E0`,
    },
    thead: {
      'background': `#F5F7F9`,
      'font-weight': `600`,
    },
    td: {
      padding: `0.8rem 1rem`,
      border: `1px solid #E0E0E0`,
    },

    // 分隔线（非干扰式）
    hr: {
      border: `none`,
      height: `1px`,
      background: `#E0E0E0`,
      margin: `3rem 0`,
    },

    // 脚注（学术规范）
    footnotes: {
      'border-top': `1px solid #E0E0E0`,
      'margin-top': `3.5rem`,
      'padding-top': `1.5rem`,
      'font-size': `0.85em`,
      'color': `#7F8C8D`,
    },
  },
  inline: {
    listitem: {
      'margin': `0.6em 0`,
      'line-height': `1.8`,
    },

    codespan: {
      'background': `#F0F3F6`,
      'padding': `0.2em 0.4em`,
      'border-radius': `3px`,
      'font-family': `"Source Code Pro", monospace`,
      'font-size': `0.9em`,
      'color': `#4A6FA5`,
      'border': `1px solid #D6E0E8`,
    },

    em: {
      'font-style': `italic`,
      'color': `#4A6FA5`,
    },

    link: {
      'color': `#4A6FA5`,
      'text-decoration': `underline`,
      'text-decoration-color': `rgba(74, 111, 165, 0.3)`,
    },

    strong: {
      'font-weight': `600`,
      'color': `#2C3E50`,
    },

    footnote: {
      'font-size': `0.85em`,
      'color': `#7F8C8D`,
    },

    figcaption: {
      'text-align': `center`,
      'font-size': `0.9em`,
      'color': `#7F8C8D`,
      'margin-top': `0.8rem`,
    },
  },
}

// 主题与主题色的映射关系
// 添加新主题时，在这里添加对应的主题色
export const themeColorMap = {
  default: `#0F4C81`, // 经典蓝
  phycatGreen: `#11aa63`, // 绿色
  phycatMint: `#1FA2FF`, // 薄荷色
  phycatOrange: `#ff8c42`, // 橙色
  phycatPlusblue: `#4285f4`, // 蓝色
  phycatPurple: `#8e44ad`, // 紫色
  phycatRed: `#e74c3c`, // 红色
  tech: `#2196F3`, // 蓝色
  minimal: `#333333`, // 石墨黑
  letter: `#5D4037`, // 信纸黑
  ecommerce: `#FF6B35`, // 电商橙
  literary: `#8AA896`, // 文学绿
  news: `#C33C2D`, // 新闻红
  pink: `#FF85A2`, // 粉色
  luxury: `#D4AF37`, // 高端黑金
  kids: `#5E9DD9`, // 天蓝色
  reading: `#4A6FA5`, // 阅读蓝
  // 在这里添加新主题的主题色
  // 格式: 主题名: `颜色代码`, // 颜色描述
}

// 主题选项
export const themeOptions: IConfigOption<keyof typeof themeMap>[] = [
  {
    label: `蓝色经典`, // 显示在菜单中的名称
    value: `default`, // 对应themeMap中的键名
    desc: `@Doocs`, // 描述信息
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
  {
    label: `科技风格`,
    value: `tech`,
    desc: `@linxi9948`,
  },
  {
    label: `极简风格`,
    value: `minimal`,
    desc: `@linxi9948`,
  },
  {
    label: `信纸风格`,
    value: `letter`,
    desc: `@linxi9948`,
  },
  {
    label: `电商风格`,
    value: `ecommerce`,
    desc: `@linxi9948`,
  },
  {
    label: `文艺风格`,
    value: `literary`,
    desc: `@linxi9948`,
  },
  {
    label: `新闻主题`,
    value: `news`,
    desc: `@linxi9948`,
  },
  {
    label: `粉色主题`,
    value: `pink`,
    desc: `@linxi9948`,
  },
  {
    label: `高端黑金`,
    value: `luxury`,
    desc: `@linxi9948`,
  },
  {
    label: `卡通主题`,
    value: `kids`,
    desc: `@linxi9948`,
  },
  {
    label: `阅读主题`,
    value: `reading`,
    desc: `@linxi9948`,
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
  phycatGreen,
  phycatMint,
  phycatOrange,
  phycatPlusblue,
  phycatPurple,
  phycatRed,
  tech: techTheme,
  minimal: minimalTheme,
  letter: letterTheme,
  ecommerce: ecommerceTheme,
  literary: literaryTheme,
  news: newsTheme,
  pink: pinkTheme,
  luxury: luxuryTheme,
  kids: kidsTheme,
  reading: readingTheme,
}
