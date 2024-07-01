
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertRemove from "../../src/components/MdiAlertRemove.vue";

test("MdiAlertRemove snapshot", () => {
  const wrapper = mount(MdiAlertRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
