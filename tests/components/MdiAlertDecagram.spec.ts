
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertDecagram from "../../src/components/MdiAlertDecagram.vue";

test("MdiAlertDecagram snapshot", () => {
  const wrapper = mount(MdiAlertDecagram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
