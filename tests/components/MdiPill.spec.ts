
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPill from "../../src/components/MdiPill.vue";

test("MdiPill snapshot", () => {
  const wrapper = mount(MdiPill, {});
  expect(wrapper.html()).toMatchSnapshot();
});
