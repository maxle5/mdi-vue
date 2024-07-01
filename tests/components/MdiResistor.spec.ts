
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiResistor from "../../src/components/MdiResistor.vue";

test("MdiResistor snapshot", () => {
  const wrapper = mount(MdiResistor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
