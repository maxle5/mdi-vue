
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophoneQuestion from "../../src/components/MdiMicrophoneQuestion.vue";

test("MdiMicrophoneQuestion snapshot", () => {
  const wrapper = mount(MdiMicrophoneQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
