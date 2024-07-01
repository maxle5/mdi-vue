
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophoneOff from "../../src/components/MdiMicrophoneOff.vue";

test("MdiMicrophoneOff snapshot", () => {
  const wrapper = mount(MdiMicrophoneOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
