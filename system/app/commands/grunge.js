export const setup = {
  name: "grunge",
  version: "40.0.3",
  permission: "Users",
  creator: "John Lester",
  description: "Grunge metallic 3D text effect",
  category: "Text Generation",
  usages: ["[text]"],
  mainScreenshot: ["/media/grunge/screenshot/main.jpg"],
  screenshot: ["/media/grunge/screenshot/main.jpg"],
  cooldown: 5,
  isPrefix: true
};
export const domain = {"grunge": setup.name}
export const execCommand = async function({api, event, key, kernel, umaru, args, Users, context}) {
  await umaru.createJournal(event);
  let text = args.join(" ");
  if(args.length === 0) text = await Users.getName(event.senderID);
  return api.sendMessage({body: context, attachment: await kernel.readStream(["grunge"], {key: key, text: text})}, event.threadID, async() => {
    await umaru.deleteJournal(event);
  }, event.messageID)
}