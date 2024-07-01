
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRewind15 from "../../src/components/MdiRewind15.vue";

test("MdiRewind15 snapshot", () => {
  const wrapper = mount(MdiRewind15, {});
  expect(wrapper.html()).toMatchSnapshot();
});
