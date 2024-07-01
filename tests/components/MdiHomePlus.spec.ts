
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomePlus from "../../src/components/MdiHomePlus.vue";

test("MdiHomePlus snapshot", () => {
  const wrapper = mount(MdiHomePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
