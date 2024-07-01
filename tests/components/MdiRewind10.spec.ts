
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRewind10 from "../../src/components/MdiRewind10.vue";

test("MdiRewind10 snapshot", () => {
  const wrapper = mount(MdiRewind10, {});
  expect(wrapper.html()).toMatchSnapshot();
});
