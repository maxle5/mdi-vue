
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneCheckOutline from "../../src/components/MdiPhoneCheckOutline.vue";

test("MdiPhoneCheckOutline snapshot", () => {
  const wrapper = mount(MdiPhoneCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
