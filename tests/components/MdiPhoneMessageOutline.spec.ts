
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneMessageOutline from "../../src/components/MdiPhoneMessageOutline.vue";

test("MdiPhoneMessageOutline snapshot", () => {
  const wrapper = mount(MdiPhoneMessageOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
