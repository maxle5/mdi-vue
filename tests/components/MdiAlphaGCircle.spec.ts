
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaGCircle from "../../src/components/MdiAlphaGCircle.vue";

test("MdiAlphaGCircle snapshot", () => {
  const wrapper = mount(MdiAlphaGCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
