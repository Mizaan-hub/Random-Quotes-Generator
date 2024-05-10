const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Happiness is largely a choice, not a right or entitlement.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Happiness is not the absence of problems, it’s the ability to deal with them.", 
    "A great obstacle to happiness is to expect too much happiness.",
    "The secret of happiness is freedom, the secret of freedom is courage.",
    "It is not how much we have, but how much we enjoy, that makes happiness.",
    "Life is hard, but there are moments, sometimes hours – and, if you’re really lucky, full days – where everything feels just right.",
    "We do not remember days, we remember moments.",
    "Life isn’t a matter of milestones, but of moments.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "The longer you live, the harder it becomes. To grab them. Each little moment as it arrives. To be living in something other than the past or the future. To be actually here.",
    "Cherish all your happy moments; they make a fine cushion for old age.",
    "Wake up to reality! Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility. Listen… Everywhere you look in this world, wherever there is light, there will always be shadows to be found as well. As long as there is a concept of victors, the vanquished will also exist. The selfish intent of wanting to preserve peace initiates wars and hatred is born in order to protect love. There are nexuses, causal relationships that cannot be separated. I want to sever the fate of this world. A world of only victors. A world of only peace. A world of only love. I will create such a world. I am…the ghost of the Uchihas. For truly this reality…is a hell."
]

const index = new Set()
const element = document.getElementById("quote")

function generate() {
    if(index.size >= quotes.length){
        index.clear()
    }

    while(true){
        const randomQ = Math.floor(Math.random() * quotes.length)

        if(index.has(randomQ)) continue

        const quote = quotes[randomQ]
        element.innerHTML = quote;
        index.add(randomQ)
        break
    }
}