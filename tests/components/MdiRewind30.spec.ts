
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRewind30 from "../../src/components/MdiRewind30.vue";

test("MdiRewind30 snapshot", () => {
  const wrapper = mount(MdiRewind30, {});
  expect(wrapper.html()).toMatchSnapshot();
});
