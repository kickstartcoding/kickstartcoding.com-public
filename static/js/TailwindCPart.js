// ALL OF THIS IS DEAD CODE!
// (Later should implement this, to allow for prefixed pre-computed tailwind classes)

window.document.addEventListener('readystatechange', () => { if (modulo.registry.cparts.Tailwind)  return; /* XXX See https://github.com/modulojs/modulo/issues/38 */

modulo.register('processor', function scanParentForIdentifiers (modulo, def, value) {
    const types = value.split(',');
    const parentDef = def.Parent ? modulo.definitions[def.Parent] : {};
    const siblings = (parentDef.ChildrenNames || []).map(name => modulo.definitions[name]);
    const targetSiblings = siblings.filter(({ Type }) => types.includes(Type)); // i.e. "<Template>" only
    const targetContent = targetSiblings.map(({ Content }) => Content);
    if (types.includes('HTML')) {
        targetContent.push(document.body.innerHTML);
    }
    const tokens = new Set(targetContent.join('\n').split(new RegExp('[\'\"\\s ]+', 'g')));
    //console.log('tokesn', tokens);
    const isValid = /^[a-zA-Z_-][a-zA-Z0-9!@#\$%\^\&*\)\(\[\]+=._-]+$/g;
    const identifiers = Array.from(tokens).filter(token => token.match(isValid));
    def.Identifiers = identifiers;
    console.log('potentialIdentifiers', identifiers);
});


const originalBuild = modulo.registry.commands.build;
modulo.register('command', function build (modulo, opts = {}) {
    for (const node of document.querySelectorAll('style')) {
        if (node.textContent.includes('tailwindcss')) {
            modulo.assets.cssAssetArray.push(node.textContent);
        }
    }
    originalBuild(modulo, opts);
});

modulo.register('cpart', class Tailwind extends modulo.registry.cparts.Style {
    initializedCallback() {
        console.log('tailwind initialized');
    }
}, {
    TargetCPart: 'HTML,Template',
    DefBuilders: [ 'TargetCPart|scanParentForIdentifiers' ],
    DefFinalizers: [ 'Content|PrefixCSS' ]
});



}); /* XXX See https://github.com/modulojs/modulo/issues/38 */

