
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNeedle from "../../src/components/MdiNeedle.vue";

test("MdiNeedle snapshot", () => {
  const wrapper = mount(MdiNeedle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
