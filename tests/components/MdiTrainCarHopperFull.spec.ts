
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarHopperFull from "../../src/components/MdiTrainCarHopperFull.vue";

test("MdiTrainCarHopperFull snapshot", () => {
  const wrapper = mount(MdiTrainCarHopperFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
