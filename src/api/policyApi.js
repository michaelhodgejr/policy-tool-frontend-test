class PolicyApi {

  constructor() {
    this.apiEndpoint = 'http://localhost:3001';
  }

  static getAllPolicyCategories() {
    return fetch('http://localhost:3001/policy_categories').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });

  }

}

export default PolicyApi;
