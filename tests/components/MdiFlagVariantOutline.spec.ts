
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagVariantOutline from "../../src/components/MdiFlagVariantOutline.vue";

test("MdiFlagVariantOutline snapshot", () => {
  const wrapper = mount(MdiFlagVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
