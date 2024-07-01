
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophoneVariantOff from "../../src/components/MdiMicrophoneVariantOff.vue";

test("MdiMicrophoneVariantOff snapshot", () => {
  const wrapper = mount(MdiMicrophoneVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
