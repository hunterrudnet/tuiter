import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                <div class="position-relative col-11">
                    <input type="text" class="form-control form-control-lg rounded-pill ps-5" placeholder="Search Twitter"
                           aria-label="Search" aria-describedby="basic-addon2" />
                    <span class="position-absolute magnifying-glass"><i class="fa-solid fa-magnifying-glass fa-lg"></i></span>
                </div>
                <a class="mt-2 col-1" href="explore-settings.html">
                    <i class="fa fa-cog fa-2x" style="color: dodgerblue"></i>
                </a>
            </div>
           <ul class="nav mb-2 nav-tabs mt-2">
                      <!-- tabs -->
                      <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-inline">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
                <img src="../../images/school.jpeg" alt="Test Taking" width="100%">
                <h1 class="position-absolute bottom-0 text-white">Test Taking</h1>
            </div>
           ${PostSummaryList()}
    `);
}

export default ExploreComponent;
