import streamlit as st
import random

st.set_page_config(page_title="😎🧠 Game Developer Chatbot")

qa_pairs = {
    "what is game development?": "Game development is the process of creating video games. It involves designing, programming, art creation, and testing.",
    "what are the different stages of game development?":"The stages typically include concept development, pre-production, production, testing, and post-production.",
    "which programming languages are commonly used in game development?":"Common languages include C++, C#, Java, and Python.",
    "What is the role of a game designer?":"Game designers are responsible for conceptualizing game mechanics, creating level designs, and defining the overall gameplay experience.",
    "what is the difference between 2D and 3D game development?":"2D games are played on a 2-dimensional plane, while 3D games offer a more immersive experience with three-dimensional environments and characters.",
    "what software is commonly used for game development?":"Popular game development software includes Unity, Unreal Engine, Godot, and GameMaker Studio.",
    "what skills are essential for a game developer?":"Skills include programming, game design, graphic design, animation, storytelling, and problem-solving.",
    "how can I learn game development?":"You can learn game development through online tutorials, courses, books, and by practicing with game development software.",
    "what are some common pitfalls in game development?":"Common pitfalls include scope creep, poor project management, and underestimating development time and costs.",
    "what is game optimization?":"Game optimization involves improving the performance of a game by reducing resource usage and increasing frame rates.",
    "what is game monetization?":"Game monetization is the process of generating revenue from a game. This can include selling the game, in-game purchases, ads, or subscription models.",
    "how do you design engaging gameplay?":"Engaging gameplay is often achieved through a balance of challenge, reward, and player agency. Iterative testing and player feedback are essential.",
    "what is the importance of storytelling in games?":"Storytelling adds depth and context to the game world, helping players become more emotionally invested in the experience.",
    "how do you create game art?":"Game art can be created using software like Adobe Photoshop, Blender, Autodesk Maya, or by hand-drawing and scanning.",
    "what is procedural generation in games?":"Procedural generation involves using algorithms to create game content dynamically, such as levels, terrain, or textures.",
    "What are shaders in game development?":"Shaders are programs used to render graphics in games, controlling lighting, texture mapping, and special effects.",
    "What are the steps involved in publishing a game?":"Steps include preparing marketing materials, optimizing performance, testing, and submitting the game to digital distribution platforms.",
    "What is the difference between indie and AAA game development?":"Indie game development involves small teams or individuals creating games independently, while AAA development typically involves larger budgets and teams working for established studios.",
    "How do you market a game effectively?":"Effective game marketing involves creating a strong brand identity, building hype through social media and press coverage, and engaging with the gaming community.",
    "What are some emerging trends in game development?":"Emerging trends include virtual reality, augmented reality, cloud gaming, and blockchain technology.",
    "What are some good resources for game developers?":"Resources include online forums like Unity or Unreal Engine communities, game development blogs, and conferences like GDC (Game Developers Conference).",
    "How do you choose the right game engine for your project?":"Consider factors like your team's expertise, the platform you're targeting, licensing costs, and the specific features you need.",
    "What are some common gameplay mechanics?":"Common mechanics include platforming, puzzle-solving, combat, crafting, and exploration.",
    "What are some important considerations for multiplayer game development?":"Considerations include networking infrastructure, server architecture, cheat prevention, and matchmaking algorithms.",
    "How do you balance difficulty in a game?":"Balancing difficulty involves adjusting factors like enemy strength, player abilities, and level design to provide a challenging but fair experience.",
    "What are some best practices for UI/UX design in games?":"Best practices include clear navigation, intuitive controls, responsive feedback, and consistent visual style.",
    "What are some legal considerations for game development?":"Legal considerations include copyright, trademarks, licensing agreements, and compliance with industry regulations like age ratings.",
    "What is the role of sound design in games?":"Sound design enhances immersion and atmosphere in games, providing audio feedback for gameplay actions and setting the mood with music and sound effects.",
    "How do you implement artificial intelligence in games?":"AI in games can be implemented using techniques like pathfinding, behavior trees, finite state machines, and neural networks.",
    "What are some common game development patterns and techniques?":"Common patterns include the singleton pattern, observer pattern, and model-view-controller architecture.",
    "What are some considerations for porting a game to different platforms?":"Considerations include hardware limitations, input methods, performance optimization, and platform-specific features and regulations.",
    "How do you create a compelling game narrative?":"Compelling narratives often involve well-developed characters, meaningful choices, and a cohesive plot that integrates with gameplay.",
    "What are some strategies for player retention in games?":"Strategies include regular content updates, social features, achievements, leaderboards, and rewards for long-term engagement.",
    "How do you design effective game controls?":"Effective controls are intuitive, responsive, and well-suited to the platform and genre of the game.",
    "What are some considerations for designing accessible games?":"Considerations include providing options for adjustable difficulty, customizable controls, and support for various input devices and assistive technologies.",
    "What are some techniques for generating game ideas?":"Techniques include brainstorming, drawing inspiration from other media, experimenting with mechanics, and considering current trends and player preferences.",
    "How do you manage game assets effectively?":"Asset management involves organizing files, version control, and optimizing assets for performance and storage efficiency.",
    "What are some strategies for playtesting games?":"Strategies include recruiting diverse testers, collecting feedback through surveys and analytics, and observing player behavior in real-time.",
    "How do you create a cohesive art style for a game?":"Cohesive art styles are achieved through consistent visual elements such as color palettes, character designs, and environmental themes.",
    "What are some considerations for designing in-game economies?":"Considerations include balancing in-game currencies, regulating item rarity, preventing inflation, and designing fair monetization options.",
    "What is the role of game producers and project managers?":"Producers and project managers oversee the development process, coordinating tasks, managing budgets and schedules, and facilitating communication within the team.",
    "How do I create multiplayer games?":"Multiplayer games require networking code to facilitate communication between players, often using client-server architectures.",
    "What are some game development communities and forums?":"Communities like Unity Forum, Unreal Engine Forum, and Reddit's r/gamedev are great places to connect with other developers, seek advice, and share resources.",
    "What is game marketing?":"Game marketing involves promoting your game through social media, press releases, trailers, and community engagement to reach potential players."
}



qa_pairs1 = {
    "what is game development?": "Game development is the process of creating video games. It involves designing, programming, art creation, and testing.",
    "what are the different stages of game development?":"The stages typically include concept development, pre-production, production, testing, and post-production.",
    "which programming languages are commonly used in game development?":"Common languages include C++, C#, Java, and Python.",
    "What is the role of a game designer?":"Game designers are responsible for conceptualizing game mechanics, creating level designs, and defining the overall gameplay experience.",
    "what is the difference between 2D and 3D game development?":"2D games are played on a 2-dimensional plane, while 3D games offer a more immersive experience with three-dimensional environments and characters.",
    "what software is commonly used for game development?":"Popular game development software includes Unity, Unreal Engine, Godot, and GameMaker Studio.",
    "what skills are essential for a game developer?":"Skills include programming, game design, graphic design, animation, storytelling, and problem-solving.",
    "how can I learn game development?":"You can learn game development through online tutorials, courses, books, and by practicing with game development software.",
    "what are some common pitfalls in game development?":"Common pitfalls include scope creep, poor project management, and underestimating development time and costs.",
    "what is game optimization?":"Game optimization involves improving the performance of a game by reducing resource usage and increasing frame rates.",
    "what is game monetization?":"Game monetization is the process of generating revenue from a game. This can include selling the game, in-game purchases, ads, or subscription models.",
    "how do you design engaging gameplay?":"Engaging gameplay is often achieved through a balance of challenge, reward, and player agency. Iterative testing and player feedback are essential.",
    "what is the importance of storytelling in games?":"Storytelling adds depth and context to the game world, helping players become more emotionally invested in the experience.",
    "how do you create game art?":"Game art can be created using software like Adobe Photoshop, Blender, Autodesk Maya, or by hand-drawing and scanning.",
    "what is procedural generation in games?":"Procedural generation involves using algorithms to create game content dynamically, such as levels, terrain, or textures.",
}
qa_pairs2 = {
    "What are shaders in game development?":"Shaders are programs used to render graphics in games, controlling lighting, texture mapping, and special effects.",
    "What are the steps involved in publishing a game?":"Steps include preparing marketing materials, optimizing performance, testing, and submitting the game to digital distribution platforms.",
    "What is the difference between indie and AAA game development?":"Indie game development involves small teams or individuals creating games independently, while AAA development typically involves larger budgets and teams working for established studios.",
    "How do you market a game effectively?":"Effective game marketing involves creating a strong brand identity, building hype through social media and press coverage, and engaging with the gaming community.",
    "What are some emerging trends in game development?":"Emerging trends include virtual reality, augmented reality, cloud gaming, and blockchain technology.",
    "What are some good resources for game developers?":"Resources include online forums like Unity or Unreal Engine communities, game development blogs, and conferences like GDC (Game Developers Conference).",
    "How do you choose the right game engine for your project?":"Consider factors like your team's expertise, the platform you're targeting, licensing costs, and the specific features you need.",
    "What are some common gameplay mechanics?":"Common mechanics include platforming, puzzle-solving, combat, crafting, and exploration.",
    "What are some important considerations for multiplayer game development?":"Considerations include networking infrastructure, server architecture, cheat prevention, and matchmaking algorithms.",
    "How do you balance difficulty in a game?":"Balancing difficulty involves adjusting factors like enemy strength, player abilities, and level design to provide a challenging but fair experience.",
    "What are some best practices for UI/UX design in games?":"Best practices include clear navigation, intuitive controls, responsive feedback, and consistent visual style.",
    "What are some legal considerations for game development?":"Legal considerations include copyright, trademarks, licensing agreements, and compliance with industry regulations like age ratings.",
    "What is the role of sound design in games?":"Sound design enhances immersion and atmosphere in games, providing audio feedback for gameplay actions and setting the mood with music and sound effects.",
    "How do you implement artificial intelligence in games?":"AI in games can be implemented using techniques like pathfinding, behavior trees, finite state machines, and neural networks.",
    "What are some common game development patterns and techniques?":"Common patterns include the singleton pattern, observer pattern, and model-view-controller architecture."
}
qa_pairs3 = {
    "What are some considerations for porting a game to different platforms?":"Considerations include hardware limitations, input methods, performance optimization, and platform-specific features and regulations.",
    "How do you create a compelling game narrative?":"Compelling narratives often involve well-developed characters, meaningful choices, and a cohesive plot that integrates with gameplay.",
    "What are some strategies for player retention in games?":"Strategies include regular content updates, social features, achievements, leaderboards, and rewards for long-term engagement.",
    "How do you design effective game controls?":"Effective controls are intuitive, responsive, and well-suited to the platform and genre of the game.",
    "What are some considerations for designing accessible games?":"Considerations include providing options for adjustable difficulty, customizable controls, and support for various input devices and assistive technologies.",
    "What are some techniques for generating game ideas?":"Techniques include brainstorming, drawing inspiration from other media, experimenting with mechanics, and considering current trends and player preferences.",
    "How do you manage game assets effectively?":"Asset management involves organizing files, version control, and optimizing assets for performance and storage efficiency.",
    "What are some strategies for playtesting games?":"Strategies include recruiting diverse testers, collecting feedback through surveys and analytics, and observing player behavior in real-time.",
    "How do you create a cohesive art style for a game?":"Cohesive art styles are achieved through consistent visual elements such as color palettes, character designs, and environmental themes.",
    "What are some considerations for designing in-game economies?":"Considerations include balancing in-game currencies, regulating item rarity, preventing inflation, and designing fair monetization options.",
    "What is the role of game producers and project managers?":"Producers and project managers oversee the development process, coordinating tasks, managing budgets and schedules, and facilitating communication within the team.",
    "How do I create multiplayer games?":"Multiplayer games require networking code to facilitate communication between players, often using client-server architectures.",
    "What are some game development communities and forums?":"Communities like Unity Forum, Unreal Engine Forum, and Reddit's r/gamedev are great places to connect with other developers, seek advice, and share resources.",
    "What is game marketing?":"Game marketing involves promoting your game through social media, press releases, trailers, and community engagement to reach potential players."
}

pairs = [qa_pairs1, qa_pairs2, qa_pairs3]
random_pair = random.choice(pairs)

st.title("Game Developer ChatBot")


with st.sidebar:
    st.title('😎🧠 Game Developer Chatbot')
    st.write('**This chatbot will provide the knowledge about Game Development.**')
    st.write("**Today questions task to learn.**")
    for i in random_pair:
        st.write(i)

if "messages" not in st.session_state.keys():
    st.session_state.messages = [{"role": "assistant", "content": "How May I Help You Today?"}]

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.write(message["content"])

def clear_chat_history():
    st.session_state.messages = [{"role": "assistant", "content": "How May I Help You Today?"}]
st.sidebar.button('Clear Chat History', on_click=clear_chat_history)

def respond_to_question(question):
    if question in qa_pairs:
        return qa_pairs[question]
    else:
        return "Enter Wrong Information! Please Check The Query?"

if prompt := st.chat_input():
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.write(prompt)


if st.session_state.messages[-1]["role"] != "assistant":
    with st.chat_message("assistant"):
        with st.spinner("Thinking..."):
            response = respond_to_question(prompt)
            placeholder = st.empty()
            full_response = ''
            for item in response:
                full_response += item
                placeholder.markdown(full_response)
            placeholder.markdown(full_response)
    message = {"role": "assistant", "content": full_response}
    st.session_state.messages.append(message)