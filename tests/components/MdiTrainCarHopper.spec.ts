
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarHopper from "../../src/components/MdiTrainCarHopper.vue";

test("MdiTrainCarHopper snapshot", () => {
  const wrapper = mount(MdiTrainCarHopper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
