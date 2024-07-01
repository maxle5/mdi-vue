
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteAlertOutline from "../../src/components/MdiDeleteAlertOutline.vue";

test("MdiDeleteAlertOutline snapshot", () => {
  const wrapper = mount(MdiDeleteAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
