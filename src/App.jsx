import Logo from "../src/assets/chatgpt-logo.png";
import plus from "../src/assets/plus-icon.jpeg";
import message from "../src/assets/q-icon.png";
import home from "../src/assets/home.png";
import saveicon from "../src/assets/saved-icon.png";
import upgrade from "../src/assets/upgrade.png";
import sendbtn from "../src/assets/send-btn.png"
import chatgpt from "../src/assets/chatgpt.png"
import user from "../src/assets/user.png"

function App() {

  return (
    <div className="App min-h-screen flex">
      <div className="sideBar border-r-2 border-gray-600">
        <div className="upperSide p-8 px-12 h-3/4 border-b-2 border-gray-600">
          <div className="upperSideTop flex gap-3 items-center"><img src={Logo} alt="logo" className="max-w-full w-14" /><span className="title text-4xl">ChatGPT</span></div>
          <button className="newChat bg-indigo-600 hover:bg-indigo-700 p-5 flex gap-3 text-3xl mt-7 w-full justify-center rounded-md items-center"><img src={plus} alt="addbtn" className="w-6" /> New Chat</button>
          <div className="upperSideBottom flex flex-col mt-14 gap-5">
            <button className="query flex items-center gap-6 border rounded-md p-5 text-xl border-gray-500 text-left hover:border-gray-400"><img src={message} alt="" className="w-7" /> What is Programming?</button>
            <button className="query flex items-center gap-6 border rounded-md p-5 text-xl border-gray-500 text-left hover:border-gray-400"><img src={message} alt="" className="w-7" /> How to use an API?</button>
          </div>
        </div>
        <div className="lowerSide justify-center py-12 px-12 flex flex-col gap-12">
          <div className="listItems flex text-2xl gap-7 items-center"><img src={home} alt="" className="w-8" />Home</div>
          <div className="listItems flex text-2xl gap-7 items-center"><img src={saveicon} alt="" className="w-7" />Saved</div>
          <div className="listItems flex text-2xl gap-7 items-center"><img src={upgrade} alt="" className="w-8" />Upgrade to Pro</div>
        </div>
      </div>
      <div className="main flex flex-col items-center justify-center">
        <div className="chats overflow-hidden w-full scroll-smooth">
          <div className="chat gap-4 flex m-4 text-justify px-12 py-10 items-start text-xl">
            <img src={user} alt="" className="w-14 object-cover" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, culpa possimus ex nulla</p>
          </div>
          <div className="chat bot gap-4 flex m-4 text-justify px-12 py-10 items-start text-xl">
            <img src={chatgpt} alt="" className="w-14 object-cover" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, culpa possimus ex nulla</p>
          </div>
        </div>
        <div className="chatFooter mt-auto w-full flex flex-col items-center justify-center">
          <div className="inp p-2 flex items-center rounded-lg">
            <input type="text" placeholder="send a message..." className="bg-transparent px-3 py-1 " /><button className="send"><img src={sendbtn} className="w-10" alt="send button" /></button>
          </div>
          <p className="my-4">ChatGPT may produce inaccurate information about people, places or facts. ChatGPT August 20 Version.</p>
        </div>
      </div>
    </div>
  )
}

export default App
