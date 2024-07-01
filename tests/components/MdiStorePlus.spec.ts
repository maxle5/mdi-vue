
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorePlus from "../../src/components/MdiStorePlus.vue";

test("MdiStorePlus snapshot", () => {
  const wrapper = mount(MdiStorePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
