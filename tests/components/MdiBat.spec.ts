
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBat from "../../src/components/MdiBat.vue";

test("MdiBat snapshot", () => {
  const wrapper = mount(MdiBat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
