
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellAlertOutline from "../../src/components/MdiBellAlertOutline.vue";

test("MdiBellAlertOutline snapshot", () => {
  const wrapper = mount(MdiBellAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
