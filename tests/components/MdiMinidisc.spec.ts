
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinidisc from "../../src/components/MdiMinidisc.vue";

test("MdiMinidisc snapshot", () => {
  const wrapper = mount(MdiMinidisc, {});
  expect(wrapper.html()).toMatchSnapshot();
});
