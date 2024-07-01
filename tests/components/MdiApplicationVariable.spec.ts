
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationVariable from "../../src/components/MdiApplicationVariable.vue";

test("MdiApplicationVariable snapshot", () => {
  const wrapper = mount(MdiApplicationVariable, {});
  expect(wrapper.html()).toMatchSnapshot();
});
