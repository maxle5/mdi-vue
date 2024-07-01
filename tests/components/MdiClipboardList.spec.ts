
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardList from "../../src/components/MdiClipboardList.vue";

test("MdiClipboardList snapshot", () => {
  const wrapper = mount(MdiClipboardList, {});
  expect(wrapper.html()).toMatchSnapshot();
});
