
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodAppleOutline from "../../src/components/MdiFoodAppleOutline.vue";

test("MdiFoodAppleOutline snapshot", () => {
  const wrapper = mount(MdiFoodAppleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
