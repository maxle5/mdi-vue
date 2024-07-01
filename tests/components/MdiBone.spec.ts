
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBone from "../../src/components/MdiBone.vue";

test("MdiBone snapshot", () => {
  const wrapper = mount(MdiBone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
