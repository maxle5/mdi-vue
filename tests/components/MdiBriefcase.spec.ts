
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcase from "../../src/components/MdiBriefcase.vue";

test("MdiBriefcase snapshot", () => {
  const wrapper = mount(MdiBriefcase, {});
  expect(wrapper.html()).toMatchSnapshot();
});
