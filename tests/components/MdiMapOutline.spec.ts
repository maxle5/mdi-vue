
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapOutline from "../../src/components/MdiMapOutline.vue";

test("MdiMapOutline snapshot", () => {
  const wrapper = mount(MdiMapOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
