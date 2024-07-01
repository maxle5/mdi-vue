
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertCircle from "../../src/components/MdiAlertCircle.vue";

test("MdiAlertCircle snapshot", () => {
  const wrapper = mount(MdiAlertCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
