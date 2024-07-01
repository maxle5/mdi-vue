
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableLargePlus from "../../src/components/MdiTableLargePlus.vue";

test("MdiTableLargePlus snapshot", () => {
  const wrapper = mount(MdiTableLargePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
