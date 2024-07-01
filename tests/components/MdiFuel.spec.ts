
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFuel from "../../src/components/MdiFuel.vue";

test("MdiFuel snapshot", () => {
  const wrapper = mount(MdiFuel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
