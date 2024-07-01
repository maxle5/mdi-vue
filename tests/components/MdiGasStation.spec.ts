
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGasStation from "../../src/components/MdiGasStation.vue";

test("MdiGasStation snapshot", () => {
  const wrapper = mount(MdiGasStation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
