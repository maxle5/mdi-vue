
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneMinusOutline from "../../src/components/MdiPhoneMinusOutline.vue";

test("MdiPhoneMinusOutline snapshot", () => {
  const wrapper = mount(MdiPhoneMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
