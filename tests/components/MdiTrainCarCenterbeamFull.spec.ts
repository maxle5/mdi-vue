
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarCenterbeamFull from "../../src/components/MdiTrainCarCenterbeamFull.vue";

test("MdiTrainCarCenterbeamFull snapshot", () => {
  const wrapper = mount(MdiTrainCarCenterbeamFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
