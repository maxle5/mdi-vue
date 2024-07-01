
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatAlert from "../../src/components/MdiChatAlert.vue";

test("MdiChatAlert snapshot", () => {
  const wrapper = mount(MdiChatAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
