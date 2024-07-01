
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGuitarElectric from "../../src/components/MdiGuitarElectric.vue";

test("MdiGuitarElectric snapshot", () => {
  const wrapper = mount(MdiGuitarElectric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
