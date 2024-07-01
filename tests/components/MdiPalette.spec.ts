
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPalette from "../../src/components/MdiPalette.vue";

test("MdiPalette snapshot", () => {
  const wrapper = mount(MdiPalette, {});
  expect(wrapper.html()).toMatchSnapshot();
});
