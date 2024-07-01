
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaUCircle from "../../src/components/MdiAlphaUCircle.vue";

test("MdiAlphaUCircle snapshot", () => {
  const wrapper = mount(MdiAlphaUCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
