
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckCargoContainer from "../../src/components/MdiTruckCargoContainer.vue";

test("MdiTruckCargoContainer snapshot", () => {
  const wrapper = mount(MdiTruckCargoContainer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
