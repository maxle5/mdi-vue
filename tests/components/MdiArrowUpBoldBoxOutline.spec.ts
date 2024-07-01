
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpBoldBoxOutline from "../../src/components/MdiArrowUpBoldBoxOutline.vue";

test("MdiArrowUpBoldBoxOutline snapshot", () => {
  const wrapper = mount(MdiArrowUpBoldBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
