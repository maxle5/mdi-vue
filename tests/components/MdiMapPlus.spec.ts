
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapPlus from "../../src/components/MdiMapPlus.vue";

test("MdiMapPlus snapshot", () => {
  const wrapper = mount(MdiMapPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
