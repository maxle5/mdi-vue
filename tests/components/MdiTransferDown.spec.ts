
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransferDown from "../../src/components/MdiTransferDown.vue";

test("MdiTransferDown snapshot", () => {
  const wrapper = mount(MdiTransferDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
