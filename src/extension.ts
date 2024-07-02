import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

function getAllRustFiles(dir: string, fileList: string[] = []): string[] {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllRustFiles(filePath, fileList);
        } else if (file.endsWith('.rs')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('rust-importer.importRustPackages', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const filePath = document.uri.fsPath;
            const fileDir = path.dirname(filePath);
            const rustFiles = getAllRustFiles(fileDir);

            let importStatements = '';
            rustFiles.forEach((file) => {
                const relativePath = path.relative(fileDir, file);
                const moduleName = relativePath.replace(/\.rs$/, '').replace(/[\/\\]/g, '::');
                importStatements += `use crate::${moduleName};\n`;
            });

            const fileContent = document.getText();
            const newContent = importStatements + fileContent;

            const edit = new vscode.WorkspaceEdit();
            const fullRange = new vscode.Range(
                document.positionAt(0),
                document.positionAt(fileContent.length)
            );
            edit.replace(document.uri, fullRange, newContent);

            vscode.workspace.applyEdit(edit).then(() => {
                vscode.window.showInformationMessage('Rust packages imported!');
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
