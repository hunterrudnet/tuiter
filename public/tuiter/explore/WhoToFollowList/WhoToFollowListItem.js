const WhoToFollowListItem = (user) => {
    return(`
        <a href="#" class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" src=${user.avatarIcon} width="100%"/>
                </div>
                <div class="col-8 text-nowrap overlay">
                    <span class="fw-bold">${user.userName}</span>
                    <i class="fa-solid fa-circle-check"></i>
                    <div class="fw-light">@${user.handle}</div>
                </div>
                <div class="col-2">
                    <button class="btn btn-primary rounded-pill float-end">
                        Follow
                    </button>
                </div>
            </div>
        </a>
    `);
}

export default WhoToFollowListItem;