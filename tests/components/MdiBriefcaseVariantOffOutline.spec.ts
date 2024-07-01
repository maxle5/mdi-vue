
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseVariantOffOutline from "../../src/components/MdiBriefcaseVariantOffOutline.vue";

test("MdiBriefcaseVariantOffOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseVariantOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
