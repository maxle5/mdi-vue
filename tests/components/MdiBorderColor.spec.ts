
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderColor from "../../src/components/MdiBorderColor.vue";

test("MdiBorderColor snapshot", () => {
  const wrapper = mount(MdiBorderColor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
