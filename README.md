# What is this?
This is a few simple regexs for TabbyChat in CosmicPVPs CosmicClient, made specifically for the CosmicPVP server.
(This rendition is for the Dungeon Planet)

# How to install from releases
After having run CosmicClient, press right Shift and in mods enable TabbyChat. 
Now open file explorer and copy paste %appdata%/.minecraft/cosmic/TabbyChat2/multiplayer/play.cosmicpvp.com(25565) into the path bar and open the server.json file.
Finally, copy and paste the contents of the server.json in this gist into that file and save it, then relaunch the CosmicClient!

# Building
Requirements to build it requires VSCode and nodejs/npm installed.
To build this, open VSCode and load the .code-workspace from the .vscode folder.
Next, run the task "Generate Regex JSON dump" and wait for it to finish.
Now, run the task "Generate server JSON" and wait for it to finish too.
Finally, the server.json output file is place in the regex folder as server.json

# Debug Details
Path for the chat logs so you can edit the commands is %appdata%\.minecraft\logs\chat\pvp0.cosmicproxy.net.(25565)

# Regex JSON Version
v0.1.1-Prerelease-Dungeon 11/20/2022
