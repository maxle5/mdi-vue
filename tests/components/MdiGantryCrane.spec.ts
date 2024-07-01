
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGantryCrane from "../../src/components/MdiGantryCrane.vue";

test("MdiGantryCrane snapshot", () => {
  const wrapper = mount(MdiGantryCrane, {});
  expect(wrapper.html()).toMatchSnapshot();
});
