
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDishwasherAlert from "../../src/components/MdiDishwasherAlert.vue";

test("MdiDishwasherAlert snapshot", () => {
  const wrapper = mount(MdiDishwasherAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
