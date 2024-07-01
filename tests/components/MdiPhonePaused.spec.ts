
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhonePaused from "../../src/components/MdiPhonePaused.vue";

test("MdiPhonePaused snapshot", () => {
  const wrapper = mount(MdiPhonePaused, {});
  expect(wrapper.html()).toMatchSnapshot();
});
