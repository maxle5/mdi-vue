
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertBox from "../../src/components/MdiAlertBox.vue";

test("MdiAlertBox snapshot", () => {
  const wrapper = mount(MdiAlertBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
