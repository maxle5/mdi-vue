
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneReturnOutline from "../../src/components/MdiPhoneReturnOutline.vue";

test("MdiPhoneReturnOutline snapshot", () => {
  const wrapper = mount(MdiPhoneReturnOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
