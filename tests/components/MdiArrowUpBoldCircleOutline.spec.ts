
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpBoldCircleOutline from "../../src/components/MdiArrowUpBoldCircleOutline.vue";

test("MdiArrowUpBoldCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowUpBoldCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
