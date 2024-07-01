
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaOCircle from "../../src/components/MdiAlphaOCircle.vue";

test("MdiAlphaOCircle snapshot", () => {
  const wrapper = mount(MdiAlphaOCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
