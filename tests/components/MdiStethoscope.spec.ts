
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStethoscope from "../../src/components/MdiStethoscope.vue";

test("MdiStethoscope snapshot", () => {
  const wrapper = mount(MdiStethoscope, {});
  expect(wrapper.html()).toMatchSnapshot();
});
