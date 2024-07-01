
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeSilo from "../../src/components/MdiHomeSilo.vue";

test("MdiHomeSilo snapshot", () => {
  const wrapper = mount(MdiHomeSilo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
