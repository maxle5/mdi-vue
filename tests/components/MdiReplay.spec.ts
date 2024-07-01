
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReplay from "../../src/components/MdiReplay.vue";

test("MdiReplay snapshot", () => {
  const wrapper = mount(MdiReplay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
