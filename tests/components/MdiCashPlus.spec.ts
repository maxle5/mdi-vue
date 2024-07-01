
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashPlus from "../../src/components/MdiCashPlus.vue";

test("MdiCashPlus snapshot", () => {
  const wrapper = mount(MdiCashPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
