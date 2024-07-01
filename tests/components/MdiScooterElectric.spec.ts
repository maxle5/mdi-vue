
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScooterElectric from "../../src/components/MdiScooterElectric.vue";

test("MdiScooterElectric snapshot", () => {
  const wrapper = mount(MdiScooterElectric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
