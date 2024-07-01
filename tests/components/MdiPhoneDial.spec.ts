
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneDial from "../../src/components/MdiPhoneDial.vue";

test("MdiPhoneDial snapshot", () => {
  const wrapper = mount(MdiPhoneDial, {});
  expect(wrapper.html()).toMatchSnapshot();
});
