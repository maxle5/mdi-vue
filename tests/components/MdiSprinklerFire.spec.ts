
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSprinklerFire from "../../src/components/MdiSprinklerFire.vue";

test("MdiSprinklerFire snapshot", () => {
  const wrapper = mount(MdiSprinklerFire, {});
  expect(wrapper.html()).toMatchSnapshot();
});
