
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderVertical from "../../src/components/MdiBorderVertical.vue";

test("MdiBorderVertical snapshot", () => {
  const wrapper = mount(MdiBorderVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
