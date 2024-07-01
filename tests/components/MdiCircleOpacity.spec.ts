
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleOpacity from "../../src/components/MdiCircleOpacity.vue";

test("MdiCircleOpacity snapshot", () => {
  const wrapper = mount(MdiCircleOpacity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
