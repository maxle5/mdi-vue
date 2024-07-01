
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHours24 from "../../src/components/MdiHours24.vue";

test("MdiHours24 snapshot", () => {
  const wrapper = mount(MdiHours24, {});
  expect(wrapper.html()).toMatchSnapshot();
});
