
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderRadius from "../../src/components/MdiBorderRadius.vue";

test("MdiBorderRadius snapshot", () => {
  const wrapper = mount(MdiBorderRadius, {});
  expect(wrapper.html()).toMatchSnapshot();
});
