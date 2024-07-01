
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotsVerticalCircleOutline from "../../src/components/MdiDotsVerticalCircleOutline.vue";

test("MdiDotsVerticalCircleOutline snapshot", () => {
  const wrapper = mount(MdiDotsVerticalCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
