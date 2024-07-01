
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownBoldBoxOutline from "../../src/components/MdiArrowDownBoldBoxOutline.vue";

test("MdiArrowDownBoldBoxOutline snapshot", () => {
  const wrapper = mount(MdiArrowDownBoldBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
