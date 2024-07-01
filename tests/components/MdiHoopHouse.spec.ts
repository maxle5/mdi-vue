
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHoopHouse from "../../src/components/MdiHoopHouse.vue";

test("MdiHoopHouse snapshot", () => {
  const wrapper = mount(MdiHoopHouse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
