
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagMinusOutline from "../../src/components/MdiFlagMinusOutline.vue";

test("MdiFlagMinusOutline snapshot", () => {
  const wrapper = mount(MdiFlagMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
