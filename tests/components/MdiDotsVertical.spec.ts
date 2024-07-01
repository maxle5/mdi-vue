
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotsVertical from "../../src/components/MdiDotsVertical.vue";

test("MdiDotsVertical snapshot", () => {
  const wrapper = mount(MdiDotsVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
