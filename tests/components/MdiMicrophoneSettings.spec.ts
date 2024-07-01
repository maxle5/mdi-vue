
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophoneSettings from "../../src/components/MdiMicrophoneSettings.vue";

test("MdiMicrophoneSettings snapshot", () => {
  const wrapper = mount(MdiMicrophoneSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
