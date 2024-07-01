
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeLightbulbOutline from "../../src/components/MdiHomeLightbulbOutline.vue";

test("MdiHomeLightbulbOutline snapshot", () => {
  const wrapper = mount(MdiHomeLightbulbOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
