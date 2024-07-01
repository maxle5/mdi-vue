
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarHopperCovered from "../../src/components/MdiTrainCarHopperCovered.vue";

test("MdiTrainCarHopperCovered snapshot", () => {
  const wrapper = mount(MdiTrainCarHopperCovered, {});
  expect(wrapper.html()).toMatchSnapshot();
});
