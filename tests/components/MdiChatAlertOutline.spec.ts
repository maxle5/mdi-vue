
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatAlertOutline from "../../src/components/MdiChatAlertOutline.vue";

test("MdiChatAlertOutline snapshot", () => {
  const wrapper = mount(MdiChatAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
