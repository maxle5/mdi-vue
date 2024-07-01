
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQqchat from "../../src/components/MdiQqchat.vue";

test("MdiQqchat snapshot", () => {
  const wrapper = mount(MdiQqchat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
