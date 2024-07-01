
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVariable from "../../src/components/MdiVariable.vue";

test("MdiVariable snapshot", () => {
  const wrapper = mount(MdiVariable, {});
  expect(wrapper.html()).toMatchSnapshot();
});
