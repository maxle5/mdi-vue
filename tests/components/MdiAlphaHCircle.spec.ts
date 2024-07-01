
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaHCircle from "../../src/components/MdiAlphaHCircle.vue";

test("MdiAlphaHCircle snapshot", () => {
  const wrapper = mount(MdiAlphaHCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
