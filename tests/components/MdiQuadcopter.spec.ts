
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQuadcopter from "../../src/components/MdiQuadcopter.vue";

test("MdiQuadcopter snapshot", () => {
  const wrapper = mount(MdiQuadcopter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
