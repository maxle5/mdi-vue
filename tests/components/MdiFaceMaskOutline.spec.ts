
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceMaskOutline from "../../src/components/MdiFaceMaskOutline.vue";

test("MdiFaceMaskOutline snapshot", () => {
  const wrapper = mount(MdiFaceMaskOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
