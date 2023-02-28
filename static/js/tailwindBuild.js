const originalBuild = modulo.registry.commands.build;
modulo.register('command', function build (modulo, opts = {}) {
    for (const node of document.querySelectorAll('style')) {
        if (node.textContent.includes('tailwindcss')) {
            modulo.assets.cssAssetArray.push(node.textContent);
        }
    }
    originalBuild(modulo, opts);
});
