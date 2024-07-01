
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertPlus from "../../src/components/MdiAlertPlus.vue";

test("MdiAlertPlus snapshot", () => {
  const wrapper = mount(MdiAlertPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
