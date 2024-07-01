
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGarage from "../../src/components/MdiGarage.vue";

test("MdiGarage snapshot", () => {
  const wrapper = mount(MdiGarage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
