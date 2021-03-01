class Request {
  constructor() {
    this.count = 10;
    this.apiKey = "f3A8YxgkZblbrwWrioaXqIE7X8gUvBOywNHJeaSVBeY";
    this.apiUrl = `https://api.unsplash.com/photos/random?client_id=${this.apiKey}&count=${this.count}`;
  }

  async get(){
      const reponse = await fetch(this.apiUrl);
      const reponseData = await reponse.json()
      return reponseData
  }

}
