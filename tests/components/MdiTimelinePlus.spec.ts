
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelinePlus from "../../src/components/MdiTimelinePlus.vue";

test("MdiTimelinePlus snapshot", () => {
  const wrapper = mount(MdiTimelinePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
