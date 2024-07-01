
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCity from "../../src/components/MdiCity.vue";

test("MdiCity snapshot", () => {
  const wrapper = mount(MdiCity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
