
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCabinAFrame from "../../src/components/MdiCabinAFrame.vue";

test("MdiCabinAFrame snapshot", () => {
  const wrapper = mount(MdiCabinAFrame, {});
  expect(wrapper.html()).toMatchSnapshot();
});
