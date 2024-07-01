
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagSuitcase from "../../src/components/MdiBagSuitcase.vue";

test("MdiBagSuitcase snapshot", () => {
  const wrapper = mount(MdiBagSuitcase, {});
  expect(wrapper.html()).toMatchSnapshot();
});
