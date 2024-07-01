
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPitchfork from "../../src/components/MdiPitchfork.vue";

test("MdiPitchfork snapshot", () => {
  const wrapper = mount(MdiPitchfork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
