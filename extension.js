const vscode = require('vscode');

class GardenTreeDataProvider {
    getTreeItem(element) {
        return element;
    }

    getChildren() {
        return [
            new vscode.TreeItem('Tree 🌳'),
            new vscode.TreeItem('Flower 🌼')
        ];
    }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // Register Tree Data Provider for the view
    const gardenTreeDataProvider = new GardenTreeDataProvider();
    vscode.window.registerTreeDataProvider('gardenView', gardenTreeDataProvider);

    // Register Command
    const disposable = vscode.commands.registerCommand('vscodeGarden.showGarden', () => {
        vscode.window.showInformationMessage('Welcome to My Garden!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
