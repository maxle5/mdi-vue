
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomePlusOutline from "../../src/components/MdiHomePlusOutline.vue";

test("MdiHomePlusOutline snapshot", () => {
  const wrapper = mount(MdiHomePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
