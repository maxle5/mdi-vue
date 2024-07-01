
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNuxt from "../../src/components/MdiNuxt.vue";

test("MdiNuxt snapshot", () => {
  const wrapper = mount(MdiNuxt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
