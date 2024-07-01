
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKettleAlertOutline from "../../src/components/MdiKettleAlertOutline.vue";

test("MdiKettleAlertOutline snapshot", () => {
  const wrapper = mount(MdiKettleAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
