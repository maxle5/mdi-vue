
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarPickup from "../../src/components/MdiCarPickup.vue";

test("MdiCarPickup snapshot", () => {
  const wrapper = mount(MdiCarPickup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
