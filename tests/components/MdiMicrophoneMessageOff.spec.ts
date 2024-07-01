
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophoneMessageOff from "../../src/components/MdiMicrophoneMessageOff.vue";

test("MdiMicrophoneMessageOff snapshot", () => {
  const wrapper = mount(MdiMicrophoneMessageOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
