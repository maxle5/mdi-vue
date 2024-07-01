
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveAlertOutline from "../../src/components/MdiContentSaveAlertOutline.vue";

test("MdiContentSaveAlertOutline snapshot", () => {
  const wrapper = mount(MdiContentSaveAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
