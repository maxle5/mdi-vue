
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeCityOutline from "../../src/components/MdiHomeCityOutline.vue";

test("MdiHomeCityOutline snapshot", () => {
  const wrapper = mount(MdiHomeCityOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
