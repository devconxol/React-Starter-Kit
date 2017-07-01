function pageTitle(title) {
    return 'Holy Notes | ' + title
}

function pageMeta(metas) {
    return metas.map(meta =>
        ({name: meta.name, content:meta.content}))

}

export {pageTitle, pageMeta}