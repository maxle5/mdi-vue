
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHardHat from "../../src/components/MdiHardHat.vue";

test("MdiHardHat snapshot", () => {
  const wrapper = mount(MdiHardHat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
