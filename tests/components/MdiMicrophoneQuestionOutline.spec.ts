
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophoneQuestionOutline from "../../src/components/MdiMicrophoneQuestionOutline.vue";

test("MdiMicrophoneQuestionOutline snapshot", () => {
  const wrapper = mount(MdiMicrophoneQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
