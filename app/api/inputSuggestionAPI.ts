import type {IConfig} from "~/app/api/IConfig";
import {currentConfig} from "~/app/api/config";

class InputSuggestionAPI {
    addressSuggestionUrl: string
    token: string

    constructor(config: IConfig) {
        this.addressSuggestionUrl = config.url
        this.token = config.token
    }

    async addressSuggestions (query: string) {
        const suggestionResponse = await fetch(this.addressSuggestionUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${this.token}`
            },
            body: JSON.stringify({query: query})
        })
        if (!suggestionResponse.ok) {
            console.log('Похоже, у нас что-то сломалось, зайдите попозже.')
            console.log(suggestionResponse)
        }
        return await suggestionResponse.json();
    }
}

export const inputSuggestionAPI = new InputSuggestionAPI(currentConfig);