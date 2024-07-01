
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhonePausedOutline from "../../src/components/MdiPhonePausedOutline.vue";

test("MdiPhonePausedOutline snapshot", () => {
  const wrapper = mount(MdiPhonePausedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
