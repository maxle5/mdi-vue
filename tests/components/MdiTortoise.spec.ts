
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTortoise from "../../src/components/MdiTortoise.vue";

test("MdiTortoise snapshot", () => {
  const wrapper = mount(MdiTortoise, {});
  expect(wrapper.html()).toMatchSnapshot();
});
