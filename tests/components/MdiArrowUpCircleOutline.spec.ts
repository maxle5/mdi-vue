
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpCircleOutline from "../../src/components/MdiArrowUpCircleOutline.vue";

test("MdiArrowUpCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowUpCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
