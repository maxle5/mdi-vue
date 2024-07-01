
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFunction from "../../src/components/MdiFunction.vue";

test("MdiFunction snapshot", () => {
  const wrapper = mount(MdiFunction, {});
  expect(wrapper.html()).toMatchSnapshot();
});
