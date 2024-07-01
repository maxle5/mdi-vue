
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyPlus from "../../src/components/MdiKeyPlus.vue";

test("MdiKeyPlus snapshot", () => {
  const wrapper = mount(MdiKeyPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
