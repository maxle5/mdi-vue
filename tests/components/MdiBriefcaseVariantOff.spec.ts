
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseVariantOff from "../../src/components/MdiBriefcaseVariantOff.vue";

test("MdiBriefcaseVariantOff snapshot", () => {
  const wrapper = mount(MdiBriefcaseVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
