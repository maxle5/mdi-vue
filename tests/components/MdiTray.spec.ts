
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTray from "../../src/components/MdiTray.vue";

test("MdiTray snapshot", () => {
  const wrapper = mount(MdiTray, {});
  expect(wrapper.html()).toMatchSnapshot();
});
