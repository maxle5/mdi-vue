
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseEditOutline from "../../src/components/MdiBriefcaseEditOutline.vue";

test("MdiBriefcaseEditOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
