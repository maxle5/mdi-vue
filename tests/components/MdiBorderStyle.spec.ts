
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderStyle from "../../src/components/MdiBorderStyle.vue";

test("MdiBorderStyle snapshot", () => {
  const wrapper = mount(MdiBorderStyle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
