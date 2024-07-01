
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaQCircle from "../../src/components/MdiAlphaQCircle.vue";

test("MdiAlphaQCircle snapshot", () => {
  const wrapper = mount(MdiAlphaQCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
