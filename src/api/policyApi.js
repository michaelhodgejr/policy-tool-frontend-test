class PolicyApi {

  static constructor() {
    this.apiEndpoint = 'http://localhost:3001';
  }

  static getAllPolicyCategories() {
    return fetch(this.apiEndpoint + '/policy_categories').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });

  }

}

export default PolicyApi;
