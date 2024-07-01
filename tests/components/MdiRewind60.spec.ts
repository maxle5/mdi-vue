
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRewind60 from "../../src/components/MdiRewind60.vue";

test("MdiRewind60 snapshot", () => {
  const wrapper = mount(MdiRewind60, {});
  expect(wrapper.html()).toMatchSnapshot();
});
