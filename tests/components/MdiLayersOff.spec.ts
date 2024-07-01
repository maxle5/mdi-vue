
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayersOff from "../../src/components/MdiLayersOff.vue";

test("MdiLayersOff snapshot", () => {
  const wrapper = mount(MdiLayersOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
