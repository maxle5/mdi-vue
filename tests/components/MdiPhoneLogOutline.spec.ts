
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneLogOutline from "../../src/components/MdiPhoneLogOutline.vue";

test("MdiPhoneLogOutline snapshot", () => {
  const wrapper = mount(MdiPhoneLogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
