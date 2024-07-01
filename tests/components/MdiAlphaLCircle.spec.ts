
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaLCircle from "../../src/components/MdiAlphaLCircle.vue";

test("MdiAlphaLCircle snapshot", () => {
  const wrapper = mount(MdiAlphaLCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
