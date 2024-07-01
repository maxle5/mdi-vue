
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrickPlus from "../../src/components/MdiToyBrickPlus.vue";

test("MdiToyBrickPlus snapshot", () => {
  const wrapper = mount(MdiToyBrickPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
