
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaYCircle from "../../src/components/MdiAlphaYCircle.vue";

test("MdiAlphaYCircle snapshot", () => {
  const wrapper = mount(MdiAlphaYCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
