
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagVariantOffOutline from "../../src/components/MdiFlagVariantOffOutline.vue";

test("MdiFlagVariantOffOutline snapshot", () => {
  const wrapper = mount(MdiFlagVariantOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
