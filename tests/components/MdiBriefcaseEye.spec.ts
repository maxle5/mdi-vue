
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseEye from "../../src/components/MdiBriefcaseEye.vue";

test("MdiBriefcaseEye snapshot", () => {
  const wrapper = mount(MdiBriefcaseEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
