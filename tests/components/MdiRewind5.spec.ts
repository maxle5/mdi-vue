
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRewind5 from "../../src/components/MdiRewind5.vue";

test("MdiRewind5 snapshot", () => {
  const wrapper = mount(MdiRewind5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
