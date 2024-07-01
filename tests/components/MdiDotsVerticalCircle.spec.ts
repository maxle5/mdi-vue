
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotsVerticalCircle from "../../src/components/MdiDotsVerticalCircle.vue";

test("MdiDotsVerticalCircle snapshot", () => {
  const wrapper = mount(MdiDotsVerticalCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
