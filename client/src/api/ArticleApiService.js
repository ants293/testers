const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
}

export default class ArticleApiService {
    static baseUrl = 'https://flipboard.com/@raimoseero';

    static async getArticles() {
            const request = new XMLHttpRequest();
        request.onreadystatechange = function(e)
        {
            if (this.readyState == 4)
            {
                if(this.status == 0 || this.status==200)
                {
                    console.log(request.responseText);
                }
            }
        }
        // https://cors-anywhere.herokuapp.com/

        request.open("GET", `${this.baseUrl}/feed-nii8kd0sz.rss`, true);
        request.send();
    }
}
