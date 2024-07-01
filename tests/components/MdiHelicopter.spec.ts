
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelicopter from "../../src/components/MdiHelicopter.vue";

test("MdiHelicopter snapshot", () => {
  const wrapper = mount(MdiHelicopter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
