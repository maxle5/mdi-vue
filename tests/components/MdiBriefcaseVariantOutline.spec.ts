
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseVariantOutline from "../../src/components/MdiBriefcaseVariantOutline.vue";

test("MdiBriefcaseVariantOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
