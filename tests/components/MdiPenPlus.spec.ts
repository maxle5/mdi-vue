
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPenPlus from "../../src/components/MdiPenPlus.vue";

test("MdiPenPlus snapshot", () => {
  const wrapper = mount(MdiPenPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
