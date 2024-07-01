
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePowerpoint from "../../src/components/MdiFilePowerpoint.vue";

test("MdiFilePowerpoint snapshot", () => {
  const wrapper = mount(MdiFilePowerpoint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
