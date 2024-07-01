
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountPlus from "../../src/components/MdiAccountPlus.vue";

test("MdiAccountPlus snapshot", () => {
  const wrapper = mount(MdiAccountPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
