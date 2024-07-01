
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRewind from "../../src/components/MdiRewind.vue";

test("MdiRewind snapshot", () => {
  const wrapper = mount(MdiRewind, {});
  expect(wrapper.html()).toMatchSnapshot();
});
