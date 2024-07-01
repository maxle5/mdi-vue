
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDivingScubaFlag from "../../src/components/MdiDivingScubaFlag.vue";

test("MdiDivingScubaFlag snapshot", () => {
  const wrapper = mount(MdiDivingScubaFlag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
