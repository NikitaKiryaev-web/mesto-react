 class Api {
  constructor(options) {
    this._url = options.url;
    this._token = options.token;
  }

  _getOriginalResponse(res) {
    if(res.ok) {
      return res.json();
    }
    
    return Promise.reject(`Error: ${res.status} ${res.statusText}`);    
  } 

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token
      }
    }
    )
    .then(res => {
      return this._getOriginalResponse(res);     
    })
     
  }

  getProfileInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token
      }
    })
    .then(res => {
      return this._getOriginalResponse(res);
    })
  }

  addCard(item) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    })
    .then(res => {
      return this._getOriginalResponse(res);
      
    })
    
  }

  editProfile(item) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: item.name,
        about: item.profession
      })
    })
    .then(res => {
      return this._getOriginalResponse(res);
      
    })
    
  }
  
  editProfileAvatar(item) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: item.avatar
      })
    })
    .then(res => {
      return this._getOriginalResponse(res);
    })
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._getOriginalResponse(res);
    })
  }

  likeCard(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._getOriginalResponse(res);
    })
  }

  unlikeCard(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._getOriginalResponse(res);
    })
  }


}

 const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-19',
  token: 'cdc2b984-82a4-4b35-acbd-93038325fc29'
})

export default api;