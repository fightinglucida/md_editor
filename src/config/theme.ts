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
  },
  inline: {
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
      '&:hover': {
        'border-bottom-color': `currentColor`,
      },
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

    // 表格（信纸风格）
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
  },
  inline: {
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

    // 表格（数据表风格）
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
  },
  inline: {
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

    // 表格（数据对比风格）
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
  },
  inline: {
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
}
