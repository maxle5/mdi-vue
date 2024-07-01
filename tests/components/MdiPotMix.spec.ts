
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPotMix from "../../src/components/MdiPotMix.vue";

test("MdiPotMix snapshot", () => {
  const wrapper = mount(MdiPotMix, {});
  expect(wrapper.html()).toMatchSnapshot();
});
