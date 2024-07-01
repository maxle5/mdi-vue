
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPeriodicTable from "../../src/components/MdiPeriodicTable.vue";

test("MdiPeriodicTable snapshot", () => {
  const wrapper = mount(MdiPeriodicTable, {});
  expect(wrapper.html()).toMatchSnapshot();
});
