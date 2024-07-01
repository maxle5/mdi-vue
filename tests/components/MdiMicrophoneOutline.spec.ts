
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophoneOutline from "../../src/components/MdiMicrophoneOutline.vue";

test("MdiMicrophoneOutline snapshot", () => {
  const wrapper = mount(MdiMicrophoneOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
