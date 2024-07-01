
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHours12 from "../../src/components/MdiHours12.vue";

test("MdiHours12 snapshot", () => {
  const wrapper = mount(MdiHours12, {});
  expect(wrapper.html()).toMatchSnapshot();
});
