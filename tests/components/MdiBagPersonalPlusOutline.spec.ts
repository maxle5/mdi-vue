
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagPersonalPlusOutline from "../../src/components/MdiBagPersonalPlusOutline.vue";

test("MdiBagPersonalPlusOutline snapshot", () => {
  const wrapper = mount(MdiBagPersonalPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
