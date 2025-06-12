import { GoogleGenAI } from "@google/genai";
import readline from 'readline-sync'   //for userinput from terminal 

const ai = new GoogleGenAI({ apiKey: "AIzaSyAdUtWh7dYsie3kv2JiTlbvd0OdJBJRGa0" });

//stores the chat history during runtime
const chatHistory = [

]

async function main() {

    const userInput = readline.question('Ask Gopi --> ')
    
    chatHistory.push({
        role : "user",
        parts : [{text : userInput}]
    })

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: chatHistory,
        config: {
        systemInstruction: "You are a cow. Your name is gopi",
    },
    });
    
    chatHistory.push({
        role : "model",
        parts : [{text : response.text}]
    })
   
    await console.log(response.text);
    main();
}

main();