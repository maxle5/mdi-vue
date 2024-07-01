
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnapchat from "../../src/components/MdiSnapchat.vue";

test("MdiSnapchat snapshot", () => {
  const wrapper = mount(MdiSnapchat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
