
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpCircle from "../../src/components/MdiArrowUpCircle.vue";

test("MdiArrowUpCircle snapshot", () => {
  const wrapper = mount(MdiArrowUpCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
