
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveAlertOutline from "../../src/components/MdiArchiveAlertOutline.vue";

test("MdiArchiveAlertOutline snapshot", () => {
  const wrapper = mount(MdiArchiveAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
