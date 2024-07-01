
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeedPlus from "../../src/components/MdiSeedPlus.vue";

test("MdiSeedPlus snapshot", () => {
  const wrapper = mount(MdiSeedPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
