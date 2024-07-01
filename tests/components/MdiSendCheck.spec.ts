
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendCheck from "../../src/components/MdiSendCheck.vue";

test("MdiSendCheck snapshot", () => {
  const wrapper = mount(MdiSendCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
