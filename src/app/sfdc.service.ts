import { Injectable } from "@angular/core";

declare var remoteActions;
const mock = JSON.parse(
  '[{"Id":"0030a00001bpo4iAAA","Name":"Tris Teaser","Level__c":"Primary","Email":"tteaser0@blogspot.com","Phone":"765-129-6758"},{"Id":"0030a00001bpo4jAAA","Name":"Jonis Schuricke","Level__c":"Primary","Email":"jschuricke1@meetup.com","Phone":"357-894-2538"},{"Id":"0030a00001bpo4kAAA","Name":"Vito Blois","Level__c":"Primary","Email":"vblois2@edublogs.org","Phone":"963-602-0543"},{"Id":"0030a00001bpo4lAAA","Name":"Bernie Rallin","Level__c":"Primary","Email":"brallin3@acquirethisname.com","Phone":"361-314-4018"},{"Id":"0030a00001bpo4mAAA","Name":"Ericka Gent","Level__c":"Primary","Email":"egent4@ted.com","Phone":"672-573-3611"}]'
);

const isLocalHost = () => location.href.indexOf('localhost') > -1;

@Injectable()
export class SfdcService {
  constructor() {}

  model = {
    level: "Primary",
    searchTerm: "",
    contacts: [],
    contactsToShow: []
  };

  getContacts() {

    if (isLocalHost()) {
      return new Promise((resolve, reject) => {
        this.model.contacts = mock;
        this.model.contactsToShow = mock;
        resolve(mock);
      });
    }

    return new Promise((resolve, reject) => {
      remoteActions.getContacts(
        response => {
          console.log(response);
          this.model.contacts = response;
          this.model.contactsToShow = response;
          resolve(response);
        },
        { escape: false }
      );
    });
  }

  filterContacts() {
    this.model.contactsToShow = this.model.contacts.filter(contact => {
      return contact.Name.toUpperCase().includes(
        this.model.searchTerm.toUpperCase()
      );
    });
  }

  setLevel(level) {
    this.model.level = level;
  }
}
