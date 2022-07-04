import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA.js";
import {authedUser} from "../components/AuthUser"

describe("data test", () => {
  it("will true if formatted question is passed", async () => {
    const item = {
      author: "kamil",
      optionOneText: "ali koc takimi sikti",
      optionTwoText: "büyük baskan aziz yildirim",
    };
    var result = await _saveQuestion(item);
    expect(result.id).not.toBeNull();
    expect(result.author).toBe(item.author);
    expect(result.optionOne.text).toBe(item.optionOneText);
    expect(result.optionTwo.text).toBe(item.optionTwoText);
  });

  it("Return Error if wrong data is passed Test Nr. 1", async () => {
    const item = {};
    await expect(_saveQuestion(item)).rejects.toEqual(
      "Please Enter Opt one Text || opt two text || author"
    );
  });

  it("Return Error if wrong data is passed Test Nr. 2", async () => {
    const item = {
      author: "kamil123",
      optionOneText: "Fenerbahce can'dir ",
    };
    await expect(_saveQuestion(item)).rejects.toEqual(
      "Please Enter Opt one Text || opt two text || author"
    );
  });
  it("Return Error if wrong data is passed Test nr. 3", async () => {
    const item = {
      optionOneText: "Fenerbahce kacininci olacak bu sezon",
      optionTwoText: "Sampiyon Fenerbahce!!",
    };
    await expect(_saveQuestion(item)).rejects.toEqual(
      "Please Enter Opt one Text || opt two text || author"
    );
  });

  it("Return Error if wrong data is passed Test Nr. 4", async () => {
    const item = {
      optionOneText: "Hayat ne güzel.",
      optionTwoText: "null"
    };
    await expect(_saveQuestion(item)).rejects.toEqual(
      "Please Enter Opt one Text || opt two text || author"
    );
  });

  it("should save the given answer", async () => {
    const res = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne"
  });

    expect(res).toBeTruthy();
  });

  it("doesnt save invalid answer Nr. 1", async () => {
    const item = { authedUser: "kamil123"};
    await expect(_saveQuestionAnswer(item)).rejects.toEqual(
      "Enter fields correctly"
    );
  });

  it("doesnt save invalid answer Nr. 2", async () => {
    const item = { authedUser: "sarahedo",qid: "8xf0y6ziyjabvozdd253nd"};
    await expect(_saveQuestionAnswer(item)).rejects.toEqual(
      "Enter fields correctly"
    );});
});
