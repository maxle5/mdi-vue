
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophoneMessage from "../../src/components/MdiMicrophoneMessage.vue";

test("MdiMicrophoneMessage snapshot", () => {
  const wrapper = mount(MdiMicrophoneMessage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
