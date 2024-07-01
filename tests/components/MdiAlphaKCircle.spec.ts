
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaKCircle from "../../src/components/MdiAlphaKCircle.vue";

test("MdiAlphaKCircle snapshot", () => {
  const wrapper = mount(MdiAlphaKCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
