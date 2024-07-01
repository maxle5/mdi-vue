
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownBoldCircleOutline from "../../src/components/MdiArrowDownBoldCircleOutline.vue";

test("MdiArrowDownBoldCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowDownBoldCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
