
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaECircle from "../../src/components/MdiAlphaECircle.vue";

test("MdiAlphaECircle snapshot", () => {
  const wrapper = mount(MdiAlphaECircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
