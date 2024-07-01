
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBomb from "../../src/components/MdiBomb.vue";

test("MdiBomb snapshot", () => {
  const wrapper = mount(MdiBomb, {});
  expect(wrapper.html()).toMatchSnapshot();
});
