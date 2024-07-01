
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGaugeEmpty from "../../src/components/MdiGaugeEmpty.vue";

test("MdiGaugeEmpty snapshot", () => {
  const wrapper = mount(MdiGaugeEmpty, {});
  expect(wrapper.html()).toMatchSnapshot();
});
