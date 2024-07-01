
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophoneVariant from "../../src/components/MdiMicrophoneVariant.vue";

test("MdiMicrophoneVariant snapshot", () => {
  const wrapper = mount(MdiMicrophoneVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
