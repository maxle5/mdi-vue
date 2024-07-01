
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaACircle from "../../src/components/MdiAlphaACircle.vue";

test("MdiAlphaACircle snapshot", () => {
  const wrapper = mount(MdiAlphaACircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
