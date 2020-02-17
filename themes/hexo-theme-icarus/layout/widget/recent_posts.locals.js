module.exports = (ctx, locals) => {
    const { posts } = ctx.site;
    if (!posts.length) {
        return null;
    }
    const _posts = posts.sort('date', -1).limit(5).map(post => ({
        link: post.link,
        path: post.path,
        title: post.title,
        date: post.date,
        thumbnail: post.thumbnail,
        // fix circular JSON serialization issue
        categories: () => post.categories
    }));
    return Object.assign(locals, { posts: _posts });
}
