
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import {
  window,
  commands,
  workspace,
  ExtensionContext,
  WorkspaceConfiguration
} from 'vscode'

const demoConfig = {
  'git.enabled': false,
  'window.zoomLevel': 1,
  'editor.fontSize': 20,
  'editor.lineNumbers': 'on',
  'editor.folding': false,
  'files.exclude': {
    '**/.git': true,
    '**/.svn': true,
    '**/.hg': true,
    '**/CVS': true,
    '**/.DS_Store': true,
    '.vscode': true,
    '.gitignore': true,
    '.editorconfig': true,
    '**/*.md': true
  },
  'editor.renderIndentGuides': false,
  'editor.mouseWheelScrollSensitivity': 0.2,
  'prettier.semi': false,
  'prettier.singleQuote': true,
  'prettier.printWidth': 52
}

const toggleDemoConfig = (config: WorkspaceConfiguration) => {
  if (config.get('demo.mode') === true) {
    config.update('demo.mode', undefined)
    for (const key in demoConfig)
      config.update(key, undefined)
  }
  else {
    config.update('demo.mode', true)
    for (const key in demoConfig)
      config.update(key, demoConfig[key as keyof typeof demoConfig])
  }
}

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('demoMode.toggleDemoMode', () =>
      toggleDemoConfig(
        workspace.getConfiguration()
      )
    )
  )
}
