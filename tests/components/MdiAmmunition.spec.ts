
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAmmunition from "../../src/components/MdiAmmunition.vue";

test("MdiAmmunition snapshot", () => {
  const wrapper = mount(MdiAmmunition, {});
  expect(wrapper.html()).toMatchSnapshot();
});
