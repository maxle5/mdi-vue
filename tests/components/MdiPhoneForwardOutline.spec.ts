
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneForwardOutline from "../../src/components/MdiPhoneForwardOutline.vue";

test("MdiPhoneForwardOutline snapshot", () => {
  const wrapper = mount(MdiPhoneForwardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
