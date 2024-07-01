
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseRemove from "../../src/components/MdiBriefcaseRemove.vue";

test("MdiBriefcaseRemove snapshot", () => {
  const wrapper = mount(MdiBriefcaseRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
