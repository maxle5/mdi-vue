
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEiffelTower from "../../src/components/MdiEiffelTower.vue";

test("MdiEiffelTower snapshot", () => {
  const wrapper = mount(MdiEiffelTower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
