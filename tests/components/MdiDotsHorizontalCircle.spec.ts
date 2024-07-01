
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotsHorizontalCircle from "../../src/components/MdiDotsHorizontalCircle.vue";

test("MdiDotsHorizontalCircle snapshot", () => {
  const wrapper = mount(MdiDotsHorizontalCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
