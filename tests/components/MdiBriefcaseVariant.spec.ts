
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseVariant from "../../src/components/MdiBriefcaseVariant.vue";

test("MdiBriefcaseVariant snapshot", () => {
  const wrapper = mount(MdiBriefcaseVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
