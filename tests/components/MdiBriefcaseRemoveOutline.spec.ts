
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseRemoveOutline from "../../src/components/MdiBriefcaseRemoveOutline.vue";

test("MdiBriefcaseRemoveOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
