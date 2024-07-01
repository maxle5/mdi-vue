
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOverscan from "../../src/components/MdiOverscan.vue";

test("MdiOverscan snapshot", () => {
  const wrapper = mount(MdiOverscan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
