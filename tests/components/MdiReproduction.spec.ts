
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReproduction from "../../src/components/MdiReproduction.vue";

test("MdiReproduction snapshot", () => {
  const wrapper = mount(MdiReproduction, {});
  expect(wrapper.html()).toMatchSnapshot();
});
