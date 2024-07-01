
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepad from "../../src/components/MdiGamepad.vue";

test("MdiGamepad snapshot", () => {
  const wrapper = mount(MdiGamepad, {});
  expect(wrapper.html()).toMatchSnapshot();
});
