
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreAlertOutline from "../../src/components/MdiStoreAlertOutline.vue";

test("MdiStoreAlertOutline snapshot", () => {
  const wrapper = mount(MdiStoreAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
