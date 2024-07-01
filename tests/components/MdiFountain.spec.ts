
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFountain from "../../src/components/MdiFountain.vue";

test("MdiFountain snapshot", () => {
  const wrapper = mount(MdiFountain, {});
  expect(wrapper.html()).toMatchSnapshot();
});
