
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChat from "../../src/components/MdiChat.vue";

test("MdiChat snapshot", () => {
  const wrapper = mount(MdiChat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
