
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainBus from "../../src/components/MdiTrainBus.vue";

test("MdiTrainBus snapshot", () => {
  const wrapper = mount(MdiTrainBus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
