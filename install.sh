
      #########.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##."

# A little install script to
# remember howto install extension
PATH=./node_modules/.bin/:$PATH

npm install
vsce package
code --uninstall-extension kube.demo-mode
code --install-extension demo-mode*.vsix
rm demo-mode*.vsix
